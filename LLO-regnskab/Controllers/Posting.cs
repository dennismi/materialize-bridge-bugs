using FileHelpers;
using FileHelpers.Options;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;

namespace LLO_regnskab.Controllers
{
    public class Posting
    {
        static int running = 1;
        internal static IEnumerable<Base> Parse(string data)
        {
            if (string.IsNullOrEmpty(data)) return Enumerable.Empty<Base>();
            string[] u = data.Split(Environment.NewLine);
            List<string> y = new List<string>();

            u.ToList().ForEach(a => y.Add(a.TrimEnd(';')));
            var s = string.Join(Environment.NewLine, y);
            var types = typeof(Posting).GetNestedTypes().Where(f=>f.BaseType == typeof(Base)).OrderBy(f => f.Name);
            List<Base> x1 = null;
            foreach (var t in types)
            {
                var e = new FileHelpers.FileHelperEngine(t);
                e.Options.IgnoreEmptyLines = true;
                e.Options.IgnoreFirstLines = 1;
                e.ErrorManager.ErrorMode = ErrorMode.IgnoreAndContinue;

                x1 = e.ReadString(s).Cast<Base>().ToList();
                if (x1 != null && x1.Count > 0)
                    break;
            }
            foreach(var x2 in x1)
            {
                x2.BilagsNummer = running++;
            }

            //var x = new CsvParser(data);
            //foreach (var y in x.ToList())
            //{
            //    System.Diagnostics.Debug.WriteLine(((SparNord)y).Dato);
            //}
            return x1;
        }

        [DelimitedRecord(";")]
        public abstract class Base
        {
            [FieldHidden]
            public int BilagsNummer { get; set; }
            [FieldHidden]
            public int? KontoNr { get; set; }
            [FieldHidden]
            public string KontoTekst { get; set; }
        }
        public class AdifferentOne : Base
        {

            /// <summary>
            /// "Dato";"Tekst";"Beløb";"Saldo";"Betalingsident"
            /// </summary>
            [FieldConverter(ConverterKind.Date, "dd-MM-yyyy")]
            public DateTime Dato2 { get; set; }

            public string Tekst2 { get; set; }

            public string Betalingsident2 { get; set; }

            [FieldConverter(ConverterKind.Decimal, ",")]
            public decimal Beløb2 { get; set; }

            [FieldConverter(ConverterKind.Decimal, ",")]
            public decimal Saldo2 { get; set; }





        }
        
        public class SparNord : Base
        {


            /// <summary>
            /// "Dato";"Tekst";"Beløb";"Saldo";"Betalingsident"
            /// </summary>
            [FieldConverter(ConverterKind.Date, "dd-MM-yyyy")]
            public DateTime Dato { get; set; }

            public string Tekst { get; set; }

            [FieldConverter(ConverterKind.Decimal, ",")]
            public decimal Beløb { get; set; }

            [FieldConverter(ConverterKind.Decimal, ",")]
            public decimal Saldo { get; set; }

            public string Betalingsident { get; set; }


        }
    }
}