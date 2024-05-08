const config = {
  type: 'line',         // type of chart
  data: {
    labels: t,
    datasets: [{
      // backgroundColor:"rgba(0,0,255,1.0)",
      borderColor: "rgba(255,0,255,0.1)",
      data: P1,
      label: "P1"
    },
              {
      // backgroundColor:"rgba(0,0,255,1.0)",
      borderColor: "rgba(255,255,0,0.1)",
      data: P2,
      label: "P2"
    }]
  },           // the data
  options: {
    animation: false,   // remove animation to speed drawing up
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
      legend:{display: true,position: 'top',align: 'end'
      },
    title: {display: true, text: '', 
            font:{size: 20},
            padding:{bottom: 0},
            color: '#fff'
      },
    },
    scales: {           // axis ranges:
      y: {
        title: {
        display: true,
        text: 'Amplitude',
        font:{
              size: 20
              },
        color: '#fff'
        },
        ticks:{
            font: {
                  size: 14
                  },
            color: '#fff',
          stepSize: 20
          },
        grid: { display: true, color: "#131c2b", borderColor: '#ffcc33' },
        min: 0,
        max: 1040
      },
      
      x:{
          title: {
            display: true,
            text: 'Time(s:us)',
            font: {
                  size: 20
                  },
            color: '#fff'
          },
          ticks:{
            font: {
                  size: 10,
                  },
            color: '#fff',
            min: 0,
            max: 100,
            stepSize: 2
          },
          grid: { display: true, color: "#131c2b", borderColor: '#ffcc33' },
          min:0
      }
    }
  }
}