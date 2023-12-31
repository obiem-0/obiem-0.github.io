///////////////HEAD COMPONENT
class Head extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {

        this.outerHTML = `
      
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Obi's Portfolio</title>
        <link rel="shortcut icon" type="image/png" href="../assets/images/logos/favicon.png" />
        <link rel="stylesheet" href="../assets/css/styles.min.css" />

        <script src="../assets/libs/jquery/dist/jquery.min.js"></script>
<script src="../assets/libs/jquery/dist/jquery.min.js"></script>
<script src="../assets/js/app.min.js"></script>
<script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script src="../assets/js/sidebarmenu.js"></script>
<script src="../assets/libs/simplebar/dist/simplebar.js"></script>

      </head>

      `
    }

}

customElements.define('head-comp', Head); 


////////SIDEBAR
class Sidebar extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
      
        <aside class="left-sidebar">
    
        <div>
          <div class="brand-logo d-flex align-items-center justify-content-between">
            <a href="/" class="text-nowrap logo-img">
              <span class="hide-menu">Chukwubuikem Emuwa</span>
              <!--<img src="../assets/images/logos/dark-logo.svg" width="180" alt="" />-->
            </a>
            <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
              <i class="ti ti-x fs-8"></i>
            </div>
          </div>
         
          <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li class="nav-small-cap">
                <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span class="hide-menu">Home</span>
              </li>

              <!--
              <li class="sidebar-item">
                <a class="sidebar-link" href="../index.html" aria-expanded="false">
                  <span>
                    <i class="ti ti-layout-dashboard"></i>
                  </span>
                  <span class="hide-menu">Dashboard</span>
                </a>
              </li>
              -->

              
        <li class="sidebar-item">
                <a class="sidebar-link" href="../html/aboutme.html" aria-expanded="false">
                  <span>
                    <i class="ti ti-layout-dashboard"></i>
                  </span>
                  <span class="hide-menu">About Me</span>
                </a>
              </li>
              
        <!--
              <li class="sidebar-item">
                <a class="sidebar-link" href="../jup_demo/lab/index.html" aria-expanded="false">
                  <span>
                    <i class="ti ti-layout-dashboard"></i>
                  </span>
                  <span class="hide-menu">Test</span>
                </a>
              </li>
        -->
     
        <!--
              <li class="nav-small-cap">
                <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span class="hide-menu">UI COMPONENTS</span>
              </li>
     
              <li class="sidebar-item">
                <a class="sidebar-link" href="../ui-buttons.html" aria-expanded="false">
                  <span>
                    <i class="ti ti-article"></i>
                  </span>
                  <span class="hide-menu">Buttons</span>
                </a>
              </li>
     
              <li class="sidebar-item">
                <a class="sidebar-link" href="../ui-alerts.html" aria-expanded="false">
                  <span>
                    <i class="ti ti-alert-circle"></i>
                  </span>
                  <span class="hide-menu">Alerts</span>
                </a>
              </li>
     
              <li class="sidebar-item">
                <a class="sidebar-link" href="../ui-card.html" aria-expanded="false">
                  <span>
                    <i class="ti ti-cards"></i>
                  </span>
                  <span class="hide-menu">Card</span>
                </a>
              </li>
     
              <li class="sidebar-item">
                <a class="sidebar-link" href="../ui-forms.html" aria-expanded="false">
                  <span>
                    <i class="ti ti-file-description"></i>
                  </span>
                  <span class="hide-menu">Forms</span>
                </a>
              </li>
     
              <li class="sidebar-item">
                <a class="sidebar-link" href="../ui-typography.html" aria-expanded="false">
                  <span>
                    <i class="ti ti-typography"></i>
                  </span>
                  <span class="hide-menu">Typography</span>
                </a>
              </li>
                        
              <li class="nav-small-cap">
                <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span class="hide-menu">EXTRA</span>
              </li>
     
              <li class="sidebar-item">
                <a class="sidebar-link" href="../icon-tabler.html" aria-expanded="false">
                  <span>
                    <i class="ti ti-mood-happy"></i>
                  </span>
                  <span class="hide-menu">Icons</span>
                </a>
              </li>
     
              <li class="sidebar-item">
                <a class="sidebar-link" href="../sample-page.html" aria-expanded="false">
                  <span>
                    <i class="ti ti-aperture"></i>
                  </span>
                  <span class="hide-menu">Sample Page</span>
                </a>
              </li>
     
            -->
     
            
            </ul>
          </nav>
        </div>
     
        </aside>

      `
    }

}
customElements.define('sidebar-component', Sidebar);

/////////////HEADER
class Header extends HTMLElement {
    constructor() {
      super();
    };

   

    connectedCallback() {

   this.outerHTML = `

   <header class="app-header">
   <nav class="navbar navbar-expand-lg navbar-light">
     <ul class="navbar-nav">
   
       <li class="nav-item d-block d-xl-none">
         <a class="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
           <i class="ti ti-menu-2"></i>
         </a>
       </li>
   <!--
       <li class="nav-item">
         <a class="nav-link nav-icon-hover" href="javascript:void(0)">
           <i class="ti ti-bell-ringing"></i>
           <div class="notification bg-primary rounded-circle"></div>
         </a>
       </li>

       -->
   
     </ul>
   
     <div class="navbar-collapse justify-content-end px-0" id="navbarNav">
       <ul class="navbar-nav flex-row ms-auto align-items-center justify-content-end">
         <a href="mailto:emuwa.obi@gmail.com" target="_blank" class="btn btn-primary">Contact Me</a>
         <li class="nav-item dropdown">
           <a class="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown"
             aria-expanded="false">
             <img src="../assets/images/profile/user-1.jpg" alt="" width="35" height="35" class="rounded-circle">
           </a>
   
           <div class="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
             <div class="message-body">
               <a href="javascript:void(0)" class="d-flex align-items-center gap-2 dropdown-item">
                 <i class="ti ti-user fs-6"></i>
                 <p class="mb-0 fs-3">My Profile</p>
               </a>
               <a href="javascript:void(0)" class="d-flex align-items-center gap-2 dropdown-item">
                 <i class="ti ti-mail fs-6"></i>
                 <p class="mb-0 fs-3">My Account</p>
               </a>
               <a href="javascript:void(0)" class="d-flex align-items-center gap-2 dropdown-item">
                 <i class="ti ti-list-check fs-6"></i>
                 <p class="mb-0 fs-3">My Task</p>
               </a>
               
             </div>
           </div>
   
         </li>
   
       </ul>
     </div>
   </nav>

   </header>

`;      
//const shadowRoot = this.attachShadow({ mode: 'closed' });

      //shadowRoot.appendChild(headerTemplate.content);
    }
  }

customElements.define('header-component', Header);


///////// CONTAINER
class Whole extends HTMLElement {
    constructor() {
        super();
      };
  
     
  
      connectedCallback() {
  
       var abc =   document.body.getElementsByTagName('whole-component')[0].innerHTML ;
       console.log('1223',abc)
  
  
     this.innerHTML = `

     <sidebar-component></sidebar-component>

   <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed">

        <div class="body-wrapper">

        <header-component></header-component>


        <div class="container-fluid">

        ${abc}
     
           </div>
           </div>

        </div>

     `;   
      }

}

customElements.define('whole-component', Whole);



  
///////////// FOOTER
class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
   this.outerHTML = `

<div class="py-6 px-6 text-center">

<p class="mb-0 fs-4"> Reach out to me on
<a href="https://www.linkedin.com/in/obi-emuwa" target="_blank" class="pe-1 text-primary text-decoration-underline"> Linkedin</a> |
<a href="https://discordapp.com/users/emuwa.obi" target="_blank" class="pe-1 text-primary text-decoration-underline"> Discord</a> |
<a href="mailto:emuwa.obi@gmail.com" class="pe-1 text-primary text-decoration-underline"> Email</a> |
<a href="https://github.com/obiem" target="_blank" class="pe-1 text-primary text-decoration-underline"> Github</a>

</p>

</div>
<script src="../assets/libs/jquery/dist/jquery.min.js"></script>
<script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script src="../assets/js/sidebarmenu.js"></script>
<script src="../assets/js/app.min.js"></script>
<script src="../assets/libs/apexcharts/dist/apexcharts.min.js"></script>
<script src="../assets/libs/simplebar/dist/simplebar.js"></script>
<script src="../assets/js/dashboard.js"></script>

  
`;      
    }
  }
customElements.define('footer-component', Footer);
