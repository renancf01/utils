window.onload = () => {

    const hour1 = document.getElementById('hour1')
    const minute1 = document.getElementById('minute1')
    const hour2 = document.getElementById('hour2')
    const minute2 = document.getElementById('minute2')
    const resultHour = document.getElementById('resultHour')
    const reusltMinute = document.getElementById('resultMinute')

    document.getElementById('sum').addEventListener('click', function () {
        let totalMinute = parseInt(minute1.value) + parseInt(minute2.value)
        let totalHour = parseInt(hour1.value) + parseInt(hour2.value)

        if(totalMinute >= 60) {
            resultHour.value = totalHour + 1
            reusltMinute.value = totalMinute - 60
        }else{
            resultHour.value = totalHour
            reusltMinute.value = totalMinute
        }

    })
    document.getElementById('decrease').addEventListener('click', function () {
        let totalMinute = parseInt(minute1.value) - parseInt(minute2.value)
        let totalHour = parseInt(hour1.value) - parseInt(hour2.value)

        if(totalMinute == null){
            resultMinute.value = 0
        }        
        
        if(totalMinute < 0) {
            if(totalMinute == 0) {
                reusltMinute.value = 0
            }
            resultHour.value = totalHour - 1
            reusltMinute.value = totalMinute * -1
        }
        else{
            resultHour.value = totalHour
            reusltMinute.value = totalMinute
        }
    
    })  
}