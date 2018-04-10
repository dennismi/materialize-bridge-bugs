import * as moment from 'moment'; 
//import "moment/locale/da";
export class DateFormatValueConverter {
  toView(value,format) {
    if (value === null || value === undefined) { return "N/A"; }
    if (format === undefined) { format = "DD/MM/'YY"; }
    if (format === "long") { format = "DD MMM YYYY"; }
    if (format === "longtime") {format = "DD MMM YYYY  @ HH:mm"; }
    return moment(value).format(format);
  }

  fromView(value) {

  }
}

