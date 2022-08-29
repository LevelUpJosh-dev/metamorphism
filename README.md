# metamorphism

### Alter the composition of data.

---

### Setup Steps
1. Download the repository to your local machine.
2. Open the repo in your favorite IDE or open a CLI within the repo root.
3. Run npm install
4. Run any of the below commands to try the example files or use your own file path.

---

#### Available Methods

Note: Currently validation is not run against the output. So if you pass it a json file to parse to toml for example if you had duplicate keys is the JSON it would provide you a TOML representation of the data however duplicates keys are not valid in TOML meaning the output is not valid TOML. I have plans to add input validation in the future.

##### xmlify_json
- Example: ```node index.js xmlify_json --path "./examples/json/xml.json"```
##### jsonify_xml
- Example: ```node index.js  jsonify_xml --path "./examples/xml/b2b.xml"```
##### yamlify_json
- Example:  ```node index.js  yamlify_json --path "./examples/json/xml.json"```
##### tomlify_json
- Example: ```node index.js  tomlify_json --path "./examples/json/xml.json"```
##### htmlify_markdown
- Example: ```node index.js  htmlify_markdown --path "./examples/markdown/example.md"```

#### Quick Demo
![webstorm64_Uorm66nvDN](https://user-images.githubusercontent.com/23381860/187271666-77b43d72-4c43-4058-8e3f-75b0b74af8bf.gif)
