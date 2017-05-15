var count = 0;
             var start = new Date().getTime();
             var totalTime = 0;
             function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            function makeShapeAppear(){
                var top = Math.random() * 400;
                var left = Math.random() * 400;
                var width = (Math.random() * 150)+200;
                var height = (Math.random() * 150)+200;
                var color = getRandomColor()
                console.log(color)

                if (Math.random() > 0.5){
                    document.getElementById("shape").style.borderRadius = "50%"
                }else{
                    document.getElementById("shape").style.borderRadius = "0"
                }
                document.getElementById("shape").style.top = top+"px"
                document.getElementById("shape").style.left = left+"px"
                document.getElementById("shape").style.width = width+"px"
                document.getElementById("shape").style.width = left+"px"
                document.getElementById("shape").style.display = "block"
                document.getElementById("shape").style.backgroundColor = color
                start = new Date().getTime();

            }

            function appearAfterDelay(){
                setTimeout(makeShapeAppear,Math.random()*2000)


            }

            function countShapes(myCount, count){
                var sum = myCount + count;
                if (count == 10){
                    alert("Done")
                }
                return sum;
            }

            function findAverage(myCount, totalTime){
                avg = (totalTime/myCount)*1.0
                var num = avg.toFixed(3)
                return num
            }

            appearAfterDelay()
            document.getElementById("shape").onclick = function(){
                document.getElementById("shape").style.display = "none"
                 var end = new Date().getTime()
                 var timeTaken = (end - start)/1000
                 totalTime += timeTaken
                 console.log(totalTime)
                 var myCount = 0;
                 count++
                 myCount = countShapes(myCount,count)
                 var average = findAverage(myCount,totalTime)
                 document.getElementById("timeTaken").innerHTML = timeTaken + "s"
                 document.getElementById("averageTime").innerHTML = average +"s"
                appearAfterDelay()
            }
