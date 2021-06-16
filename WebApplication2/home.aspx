<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="home.aspx.cs" Inherits="WebApplication2.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Home Page</title>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="homeStyle.css">
</head>
<body>
    <script src="homeJs.js"></script>
    <form id="form1" runat="server">
        <div>
                <!-- /HEADER -->
                <header>
                    <nav>
                        <ul class="nav_links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Browse Resorts</a></li>
                            <li><a href="#">User Login</a></li>
                            <li><a href="#">Management</a></li>
                        </ul>
                    </nav>
                    
                </header>

            <img class="logo" src="img/logofin.png" alt="logo">

                <!-- /HEADER -->

                <!-- CONTENT -->

                    <div id="parallax">
                        <!--<img class="bpsulog" src="img/bpsulog.png" alt="bpsulog">-->
                        <h2 id="h2BPSU">BATAAN PENINSULA STATE UNIVERSITY</h2>
                    </div>

                    <div id="divIDs"><h2 id="h2IDs">---Insert info here---</h2></div>
                    <div id="parallax"><h2 id="h2IDs">---Insert info here---</h2></div>
                    <!--<div id="divIDs"><h2 id="h2IDs">---Insert info here---</h2></div>-->

                <!-- /CONTENT -->

                <!-- SCROLL UP -->

                <button id="btnScrollToTop" onclick="btnClicked()">
                    <i class="material-icons" id="scrlIcon">arrow_upward</i>
                </button>

                <!-- /SCROLL UP -->

                <!-- FOOTER -->
    
                <div class="footerCopy">
                    <div class="footer-bottom">
                        &copy; L' Tres | ARR 2021
                    </div>
                </div>

                <!-- /FOOTER -->

        </div>
    </form>

   


</body>
</html>
