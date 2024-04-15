// Track the Robot (Part 2)

function trackRobot(...steps) {
	let arr=[0,0];
    let i=0;
    
    while (i<steps.length) {
            
            arr[1]+=steps[i];
            i++;
            if (i==steps.length) {
                break;
            }
            arr[0]+=steps[i];
            i++;
            if (i==steps.length) {
                break;
            }
            arr[1]-=steps[i];
            i++;
            if (i==steps.length) {
                break;
            }
            arr[0]-=steps[i];
            i++;
    }
    
    
    
    return arr;


}

console.log(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));