import "./stylenew.css"

export default function index(){
    return(
        <>
         <nav class="navbar navbar-default navbar-fixed-top ">
          <div class="container-fluid ">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>                        
              </button>
              <a class="navbar-brand" href="#myPage"><b>PUBLISHER SUBSCRIBER</b></a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav navbar-right">
                
                
                
                <li><a href="#"><span class="glyphicon glyphicon-log-out"></span></a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="sidenav">
            <a href="/main"><b>Subscribed</b></a>
            <a href="/subscribe"><b>New Subscription</b></a>
            <a href="/publish"><b>Publish</b></a>
            
          </div>

        <div id="band" class="container text-center ">
        <br></br>
            <h3 class="clm"><b>Add new Content</b></h3>
            <br></br>
            <form>
                <label for="fname" class="txt" > Email </label><br></br>
                <input type="text" id="fname" name="fname" value="" class="k"></input><br></br>
                <label for="lname" class="txt">Topic</label><br></br>
                <input type="text" id="fname" name="fname" value="" class="k"></input><br></br>
                <label for="lname" class="txt1">Content</label><br></br>
                <input type="text" id="fname" name="fname" value="" class="k"></input>
                <br></br>
                <input type="submit" id="submit" class = "m" onclick="SubmitData()"></input>
            </form>
        </div>
        
          
       
        </>
    );
}
