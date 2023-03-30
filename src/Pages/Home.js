import React from "react";
import Header from "../Components/Header";
import Card from "../Components/Card";





const Home = () =>{
return(
<div>
<Header/>
<div className="HomeBook" sm={12} md={3} sx={{justifyContent: "space-between"}}>
<Card className="AddBook" title = "Add Book" description = "You Can Add Your Book By Simply Clicking on It" icon="<AddIcon/>"/>
<Card className="EditBook" title = "Edit Book" description = "You Can Update / Delete Your Book By Simply Clicking on It"/>
<Card className="SearchBook" title = "Search Book" description = "You Can Search Your Book By Simply Clicking on It"/>
</div>
</div>

)

}


export default Home;    