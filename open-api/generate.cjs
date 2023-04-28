/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync } = require("fs");
const { writeFile } = require("fs/promises");
const path = require("path");

const yaml = require("js-yaml");
const fetch = require("node-fetch");
const OpenAPI = require("openapi-typescript-codegen");

// Ideally, this is how I would generate everything for the api sdks, but
// since the services have their own subdomains, this method doesn't quite work
// and will just use the last base url from the set of specs for all requests.
// If we switch to a pattern like api.missionlane.com/service then this should work better

// const specs = fs.readdirSync(path.resolve(__dirname))
//                 .filter(file => path.extname(file) === '.yaml')
//                 .map(file => path.resolve(__dirname, file));

// const mergeYaml = require('merge-yaml');
// const combinedSpecs = mergeYaml(specs);

// OpenAPI.generate({
//     input: combinedSpecs,
//     output: 'src/api/',
//     httpClient: 'node'
// });

// In the meantime I'll just have some duplicative generated code by generating one folder per spec
// (async function () {
const specList = yaml.load(
  readFileSync(path.resolve(__dirname, "specs.yaml"), "utf8")
);
const regexYaml = new RegExp("^.*.(yaml|yml)$");

// fetch from yaml spec object
specList.forEach(async (spec) => {
  let fileName;
  try {
    if (spec.useLocalOverride) {
      fileName = `${__dirname}/${spec.name.trim()}.yaml`;
    } else {
      const isYaml = regexYaml.test(spec.specUrl);
      const response = await fetch(spec.specUrl);
      let specYAML;
      if (isYaml) {
        specYAML = await response.text();
      } else {
        const specTest = await response.json();
        specYAML = yaml.dump(specTest);
      }

      // generation from each spec
      var result = specYAML
        .replaceAll(/#components/g, "#/components")
        .replace(/(- url: http:\/\/localhost.*\n\s+.*\n\s+)(-)/, "$2")
        .replace("default: -dev", "default: -staging")
        .replace(/http:/, "https:");
      fileName = `${__dirname}/${spec.name}.yaml`;
      await writeFile(fileName, result, "utf8");
    }

    await OpenAPI.generate({
      clientName: spec.clientName,
      httpClient: "node",
      input: fileName,
      output: `src/api/${spec.name}`,
      useOptions: true,
      useUnionTypes: true,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: generate.cjs ~ line 63 ~ specList.forEach ~ error",
      error
    );
  }
});
