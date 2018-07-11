import { Certificates } from "/imports/api/certificate/connector";

if (Certificates.find().count() === 0) {
  console.log("Importing private/data/certificates.json to db")

  let data = JSON.parse(Assets.getText("data/certificates.json"));

  data.forEach(function (certificate, index, array) {
    Certificates.insert(certificate);
  })

}
