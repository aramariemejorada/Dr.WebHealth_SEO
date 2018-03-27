$(document).ready(function(){
    var footnote = `
    <div class="container-fluid" style="background-color: #ed6066">
        <div class="row" style="padding: 2.5px 35px">
            <div class="col-md-10">
                <p class="body-text" style="color: white; margin-bottom: 0"><small>&copy; Dr. WebHealth 2018. All Rights Reserved.</small></p>
            </div>
            <div class="col-md-2">
                <a href="#"><img src="images/fb-icon2.png" class="img-fluid"></a>
                <a href="#"><img src="images/twitt-icon.png" class="img-fluid"></a>
                <a href="#"><img src="images/g-icon2.png" class="img-fluid"></a>
                <a href="#"><img src="images/mail-icon2.png" class="img-fluid"></a>
            </div>
        </div>
    </div>`;
    var head_tags = `
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- latest version - bootstrap v4 -->
    <!-- online bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <!-- local bootstrap -->
    <link rel="stylesheet" type ="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type ="text/css" href="css/style.css">
	<link rel="icon" type="image/gif/png/ico" href="images/site-logo.png">`;
    var navigation = `
    <div class="row">
        <div class="container-fluid" style="background-color: #5adcc2; margin: 0">
            <nav class="nav">
                <div class="container">
                    <ul class="nav justify-content-center body-text ">
                        <li class="nav-item" style="padding: 0 15px;">
                            <a class="nav-link" href="index.html" style="color: white">Home</a>
                        </li>
                        <li class="nav-item" style="padding: 0 15px;">
                            <a class="nav-link" href="about.html" style="color: white">About Us</a>
                        </li>
                        <li class="nav-item" style="padding: 0 15px;">
                            <a class="nav-link" href="faqs.html" style="color: white">FAQs</a>
                        </li>
                        <li class="nav-item" style="padding: 0 15px;">
                            <a class="nav-link" href="contact.html" style="color: white">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>`;
    var banner = `
    <div class="container" style="margin-top: 5px">
        <div class="row">
            <div class="col-md-9">
                <div class="row">
                    <img src="images/site-logo.png" style="width: 75px; height: 60px; margin-left: 8px">
                    <div class="col-md-4" style="padding-left: 0; max-width: 200px">
                        <h5 style="color: #9aa3a0; font-weight: bolder; padding-top: 15px">Dr. Web<span style="color: #5adcc2">Health</span></h5>
                    </div>
                </div>
            </div>
            <div class="col-md-3" style="margin-top: 10px">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">
                            <span class="glyphicons glyphicons-search"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    var additionalInfo = `
    <div class="container-fluid" style="background-color: #f2d2d3">
    <div class="row" style="padding: 50px">
        <div class="col-md-3">
            <h6 style="color: #5b2e33" class="head-text">Dr. WebHealth</h6>
            <ul class="body-text">
                <small>
                    <a id="footer-link" href="index.html"><li>Home</li></a>
                    <a id="footer-link" href="about.html"><li>About Us</li></a>
                    <a id="footer-link" href="faqs.html"><li>FAQs</li></a>
                    <a id="footer-link" href="contact.html"><li>Contact Us</li></a>
                </small>
            </ul>
        </div>
        <div class="col-md-3">
            <h6 style="color: #5b2e33" class="head-text">Health Issues</h6>
            <ul class="body-text">
                <small>
                    <li>Cancer</li>
                    <li>Diarrhea</li>
                    <li>Parasites</li>
                </small>
            </ul>
        </div>
        <div class="col-md-3">
            <h6 style="color: #5b2e33" class="head-text">Developers</h6>
            <ul class="body-text">
                <small>
                    <li>De Leon, Justin Andre D.</li>
                    <li>Lavilla, Christian C.</li>
                    <li>Mejorada, Ara Marie C.</li>
                    <li>Valle, John D.</li>
                </small>
            </ul>
        </div>
        <div class="col-md-3">
            <h6 style="color: #5b2e33" class="head-text">Contact Information</h6>
            <ul class="body-text">
                <small>
                    <li>Bo. Obrero, Iñigo St. Davao City, Philippines 8000</li>
                </small>
            </ul>
        </div>
    </div>`;
    $('.footnote').append(footnote);
    $('.head-tags').append(head_tags);
    $('.navigation').append(navigation);
    $('.banner').append(banner);
    $('.additional-info').append(additionalInfo);
});