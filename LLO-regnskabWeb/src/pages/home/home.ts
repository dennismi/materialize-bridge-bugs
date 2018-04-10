import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

@inject(HttpClient)
export class Home {
  accountPlan: IAccount[];
  postings: any;
  http: any;
  message: string;

  constructor(http) {
    http.configure(config => {
      config.withBaseUrl("http://localhost:33899/api/");
    });
    this.http = http;
    this.accountPlan= [
      {No: 1, Text: "Konto 1"},
      {No: 2, Text: "Konto 2"},
      {No: 3, Text: "Konto 3"},
      {No: 4, Text: "Konto 4"},
    ];
  }

  public submit(files) {
    this.postings = [{"dato":"2018-02-01T00:00:00","tekst":"\"ekstra bil\"","beløb":3000.00,"saldo":3000.00,"betalingsident":"\"\"","bilagsNummer":28,"kontoNr":null,"kontoTekst":null},{"dato":"2018-03-01T00:00:00","tekst":"\"ekstra bil\"","beløb":3000.00,"saldo":6000.00,"betalingsident":"\"\"","bilagsNummer":29,"kontoNr":null,"kontoTekst":null},{"dato":"2018-04-03T00:00:00","tekst":"\"ekstra bil\"","beløb":3000.00,"saldo":9000.00,"betalingsident":"\"\"","bilagsNummer":30,"kontoNr":null,"kontoTekst":null}];
    // console.log(files);
    // let formData = new FormData();
    // for (let i = 0; i < files.length; i++) {
    //   formData.append(`files[${i}]`, files[i]);
    // }
    // this.http
    //   .fetch("files", { method: "POST", body: formData })
    //   .then(response => response.json())
    //   .then(data => {this.postings = data; console.log(data);})
    //   .catch(error => console.error(error));
  }
}

export interface IAccount{
  No:number;
  Text:string;
}
