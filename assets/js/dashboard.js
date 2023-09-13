$(function () {


  // =====================================
  // Profit
  // =====================================
  
  var chart = {


    xaxis: {
      
      type: "category", /// the groups for the skills
      categories: [
        "Software Development", 
        "Data Analysis", 
     //   "Project Management", 
        "Baking",
        "Handling Complex Datasets",
      //  "Data Engineering and Database knowledge (MySQL, Azure (Cosmos, SQL and Databricks) )"
        /*
• Data Analysis and Visualisation (Python, PowerBI, Excel, Tableau, Looker, Google Analytics)
• Integrations using REST APIs
• Project Coordination
• App Development using Java, Javascript, HTML and CSS
• QA testing using JUnit, Selenium and Low-code Automation Tools (PowerAutomate, PowerApps)
• Jira and Confluence including customisation with Groovy Scripts
*/
      ],
      labels: {
        style: { cssClass: "grey--text lighten-2--text fill-color" },
      },
    },


    yaxis: {
      show: true,
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },


    series: [
     // { name: "Earnings this month:", data: [null ,70, null, null] }, // this has to be the same number of categories
      { 
        data: [ 
          60, 
          80, 
          70, 
          90
        ]

        }, // this has to be the same number of categories

        {
       data: [ 
     "eight",
    50,
      70, 
      90
     // '<li> eight </li><li> nine </li><li> 20 </li>'
      ] 
      }
    ],


    chart: {
      type: "bar",
      height: 345,
      offsetX: -15,
      toolbar: { show: true },
      foreColor: "#adb0bb",
      fontFamily: 'inherit',
      sparkline: { enabled: false },
    },


    colors: ["#5D87FF", "#49BEFF"],


    plotOptions: {
      bar: {
        horizontal: false, // make it horizontal for easier comparision
        columnWidth: "35%",
        borderRadius: [6],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },

    markers: { size: 0 },

    dataLabels: {
      enabled: false,
    },


    legend: {
      show: false,
    },


    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },



    stroke: {
      show: true,
      width: 3,
      lineCap: "butt",
      colors: ["transparent"],
    },

  

    tooltip: { 
      theme: "light",
      custom: function(
        {series, seriesIndex, dataPointIndex, xaxis}

        ) {
        return '<div class="arrow_box">' +
         '<span>' + series[seriesIndex+1][dataPointIndex] + '</span> hi '
         + series
     
      }
    
    },

    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
            }
          },
        }
      }
    ]


  };

  var chart = new ApexCharts(document.querySelector("#chart"), chart);
  chart.render();


  // =====================================
  // Breakup
  // =====================================
  var breakup = {
    color: "#adb5bd",
    series: [38, 40, 25],
    labels: ["2022", "2021", "2020"],
    chart: {
      width: 180,
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["#5D87FF", "#ecf2ff", "#F9F9FD"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 150,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#breakup"), breakup);
  chart.render();



  // =====================================
  // Earning
  // =====================================
  var earning = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Earnings",
        color: "#49BEFF",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#earning"), earning).render();
})