    const ctx = document.getElementById("myChart").getContent("2dc");
    const myChart = new Chart (ctx,{
        type: "pie",
        date: {
            labels: [
                "instagram",
                "WhatsApp",
                "Facebook"
            ]
        }


    }
    
    )