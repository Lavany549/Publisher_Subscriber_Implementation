import "./stylemain.css"

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
              <a class="navbar-brand p" href="#myPage"><b>PUBLISHER SUBSCRIBER</b></a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav navbar-right">
                
                
                
                <li><a href="#"><span class="glyphicon glyphicon-log-out"></span></a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="sidenav">
            <a href="/main" class="tint active"><b>Subscribed</b></a>
            <a href="/subscribe"><b>New Subscription</b></a>
            <a href="/publish"><b>Publish</b></a>
            
          </div>

        <div id="band" class="container text-center clm">
        <br></br>
            <h3><b>Subscribed Channels</b></h3>
            
            <table>
                <tr>
                  <th>Id No.</th>
                  <th>Name of the Channel</th>
                  <th>Subscription</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Maria Anders</td>
                  <td><button type="button" class="btn btn-info">UnSubscribe</button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Maria Anders</td>
                    <td><button type="button" class="btn btn-info">UnSubscribe</button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Maria Anders</td>
                    <td><button type="button" class="btn btn-info">UnSubscribe</button></td>
                  </tr>
                
            </table>
            
        </div>
        
          
       
        </>
    );
}
