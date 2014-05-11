Simple app that pushes the current time to all connected clients every 5 seconds.  The time is then visualized as doughnut charts for hour, minute, and second.  Each chart only updates if it's respective value changes so the second chart updates 12 times for every minute chart update and so on.

Uses Node.JS, Socket.io, Express, and Chart.JS