using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;
using System.Data;

namespace IEProject.Models
{
    public class SQLConnection
    {
        //connect to mysql database once to get data back.
        public List<Dictionary<string, string>> getResultFromSQL(string command)
        {
            List<Dictionary<string, string>> list = new List<Dictionary<string, string>>();
            using (MySqlConnection conn = new MySqlConnection("server=localhost;user id=root;password=Peter@1993;database=carcrashes;"))
            {
                conn.Open();

                var cmd = new MySqlCommand("select * from crashes where alcohol_related <> 'No' and young_driver <> 0", conn);

                MySqlDataReader reader = cmd.ExecuteReader();

                int i = 0;

                while (reader.Read())
                {
                    Dictionary<string, string> result = new Dictionary<string, string>();
                    result["column1"] = reader[0].ToString();
                    result["column2"] = reader[1].ToString();
                    i++;
                    list.Add(result);
                }
                System.Diagnostics.Debug.WriteLine(i);
            }
            return list;
        }

        //get questions
        public DataTable getQuestions()
        {
            DataTable data = new DataTable();
            using (MySqlConnection conn = new MySqlConnection("server=localhost;user id=root;password=Peter@1993;database=carcrashes;"))
            {
                conn.Open();

                string query = "select * from carcrashes.question q, carcrashes.answer a where q.question_id = a.question_id";

                var cmd = new MySqlCommand(query, conn);

                MySqlDataReader reader = cmd.ExecuteReader();

                data.Load(reader);
            }
            System.Diagnostics.Debug.WriteLine(data.Rows.Count);
            foreach (DataRow dataRow in data.Rows)
            {
                // each row for total result
                /*
                 * [0]:question id
                 * [1]:question desc
                 * [2]:related factor
                 * [3]:question id
                 * [4]:answer id
                 * [5]:answer desc
                 * [6]:correct -- 1 correct, -- 2 incorrect
                 * [7]:explanation
                */
                foreach (var item in dataRow.ItemArray)
                {
                    //each item for single column
                    System.Diagnostics.Debug.WriteLine(item);
                }
            }
            return data;
        }






    }
}