---
title: 'Write a program to perform CRUD operations using JDBC. Program 2'
date: 2020-10-08T05:39:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-program-to-perform-crud-operations-using-jdbc-program-2/










---

```java title="assign.java" 
/**  
* Q 1) Write a program to perform CRUD operations using JDBC.  
*/  
import java.sql.Connection;  
import java.sql.DriverManager;  
import java.sql.*;  
public class assign {  
public static void main(String[] args) {  
Connection con = null;  
try {  
/**  
* Need to execute first export  
* CLASSPATH=$CLASSPATH:mysql-connector-java-8.0.21.jar  
*/  
con = DriverManager.getConnection("jdbc:mysql://localhost:3306/kaustubh?useSSL=false",  
"kaustubh",  
"kaustubh");  
// connection TEST  
System.out.println("Connection is successful !!!!!");  
//Create table if does not exists  
String CREATE_TABLE_SQL="CREATE TABLE IF NOT EXISTS kaustubh.student ("  
+ "id INT,"  
+ "sname VARCHAR(30), "  
+ "sclass VARCHAR(30),"  
+ "PRIMARY KEY (id))";  
  
//end create table if does not exists  
Statement stmt = con.createStatement();  
stmt.executeUpdate(CREATE_TABLE_SQL);  
System.out.println("Table created");  
  
insert(con,1,"Kaustubh","MCA II");  
insert(con,2,"Angad","MCA II");  
insert(con,3,"Sagar","MCA III");  
insert(con,4,"Rajesh","MCA II");  
  
// insert operation  
showData(con);  
  
// end insert  
  
// Start UPDATE Statement [UPDATE OPERATION]  
updateData(con);  
showData(con);  
// END UPDATE Statement [UPDATE OPERATION]  
// DELETE OPERATION  
delete(con);  
showData(con);  
// END DELETE  
stmt.executeUpdate("DELETE from student");  
System.out.println("Student Table DROPPED");  
  
} catch (Exception e) {  
e.printStackTrace();  
}  
}  
static void insert(Connection con,Integer sid,String name, String ssclass){  
try {  
String sql = "INSERT INTO student (id, sname, sclass) VALUES (?, ?, ?)";  
PreparedStatement statement = con.prepareStatement(sql);  
statement.setInt(1, sid);  
statement.setString(2, name);  
statement.setString(3, ssclass);  
int rowsInserted = statement.executeUpdate();  
if (rowsInserted > 0) {  
System.out.println("A new student was inserted successfully!");  
}  
} catch (Exception e) {  
e.printStackTrace();  
}  
}  
static void showData(Connection con) {  
try {  
String selectSql = "SELECT * FROM student";  
Statement selectStatement = con.createStatement();  
  
ResultSet result = selectStatement.executeQuery(selectSql);  
int count = 0;  
while (result.next()) {  
String id = result.getString("id");  
String sname = result.getString("sname");  
String sclass = result.getString("sclass");  
String output = "Student #%d: %s - %s - %s";  
System.out.println(String.format(output, ++count, id, sname, sclass));  
}  
} catch (Exception e) {  
e.printStackTrace();  
}  
}  
static void updateData(Connection con) {  
try {  
String updateSql = "UPDATE student SET sclass=? WHERE id=?";  
PreparedStatement updateStatement = con.prepareStatement(updateSql);  
updateStatement.setString(1, "MCA I");  
updateStatement.setInt(2, 4);  
int rowsUpdated = updateStatement.executeUpdate();  
if (rowsUpdated > 0) {  
System.out.println("An existing student was updated successfully!");  
}  
} catch (Exception e) {  
e.printStackTrace();  
}  
}  
  
static void delete(Connection con)  
{  
try {  
String deleteSql = "DELETE FROM student WHERE id=?";  
PreparedStatement deletestatement = con.prepareStatement(deleteSql);  
deletestatement.setInt(1, 4);  
int rowsDeleted = deletestatement.executeUpdate();  
if (rowsDeleted > 0) {  
System.out.println("A Student was deleted successfully!");  
}  
} catch (Exception e) {  
e.printStackTrace();  
}  
}  
  
}
```


Output:

![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/Screenshot-2Bfrom-2B2020-10-08-2B11-11-57.png) 