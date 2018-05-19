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
            <nav id="nav_size" class="navbar bg-dark navbar-dark navbar-expand-md" style="width: 100%; padding: 0;">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse  justify-content-center" id="collapsibleNavbar">
                    <ul class="nav body-text">
                        <li class="nav-item">
                            <a id="nav_home" class="nav-link" href="index.html" style="color: white">Home</a>
                        </li>
                        <li class="nav-item">
                            <a id="nav_about" class="nav-link" href="about.html" style="color: white">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a id="nav_faq" class="nav-link" href="faqs.html" style="color: white">FAQs</a>
                        </li>
                        <li class="nav-item">
                            <a id="nav_contact" class="nav-link" href="contact.html" style="color: white">Contact Us</a>
                        </li>
                    </ul>
                </div> 
            </nav>`;
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
                    <a id="footer-link" href="https://www.nbcnews.com/storyline/smart-facts/what-zika-virus-what-you-need-know-n860551"><li>Zikka Virus</li></a>
                    <a id="footer-link" href="https://www.medicalnewstoday.com/articles/280598.php"><li>Ebola Virus</li></a>
                    <a id="footer-link" href="https://www.aarp.org/health/conditions-treatments/info-2018/virus-mimics-flu-fd.html"><li>Adenoviruses</li></a>
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
                    <address>Bo. Obrero, Inigo St. Davao City, Philippines 8000</address>
                    <tel>(082)255-2615</tel>
                    <p>drwebhealth@gmail.com</p>
                </small>
            </ul>
        </div>
    </div>`;
    $('.footnote').append(footnote);
    $('.head-tags').append(head_tags);
    $('.navigation').append(navigation);
    $('.banner').append(banner);
    $('.additional-info').append(additionalInfo);

    var url = window.location.pathname; 
    var activePage = url.substring(url.lastIndexOf('/') + 1); 
    $('.nav li a').each(function () { 
        var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1); 

        if (activePage == linkPage) { 
            $(this).parent().addClass('active'); 
        }
    });
    $('#respiratory_row').hide();
    $('#reproductive_row').hide();
    $('#mental_row').hide();
    $('#heart_row').hide();
    $('#kidney_row').hide();

    if(location.hash=="#lungs"){
        $('#respiratory_row').show();
    }else if(location.hash=="#reproductive"){
        $('#reproductive_row').show();
    }else if(location.hash=="#mental"){
        $('#mental_row').show();
    }else if(location.hash=="#heart"){
        $('#heart_row').show();
    }else if(location.hash=="#kidney"){
        $('#kidney_row').show();
    }else{

    }
        
});