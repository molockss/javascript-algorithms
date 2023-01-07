/* buildUrl()
The purpose of this exercise is to implement the buildUrl(data), in order to build a proper URL from a specific data.
data is an object which looks like this:
{
    name: 'foo',
    timestamps: [
        1508349990,
        1508350000,
        1508357300
    ]
}
•	name can be any string
•	timestamps is an array of timestamps in seconds
o	A valid timestamp is any positive integer number.
o	Any invalid value should be ignored.
o	There will be at least 1 valid value.
Expected result
The expected URL looks like this:
https://server/record?name=<name>&duration=<duration>&median=<median>
Name:
<name> should be the name given by data
Duration:
<duration> should be a label describing the duration between the oldest valid timestamp and the newest valid timestamp given by data.
A duration label is the time spent between 2 timestamps. It should be written like this:
"2h51min10s" (if timestamps are 1000 and 11270)
or "0h0min30s" (if timestamps are 1000 and 1030)
Median:
<median> should be a label describing the duration (as defined above) between the oldest valid timestamp and the median valid timestamp.
The median is the value which divides a list in 2 halves.
The median of [1, 3, 5] is 3
The median of [1, 2, 7, 7, 42] is 7
When the number of elements is even, the median is the average of the 2 values at middle of the list.
The median of [1, 1, 3, 5] is 2
The median of [1, 4, 8, 25] is 6
For this test, if the median is a decimal number, we will consider the lower integer value.
For example, with timestamps [1, 2, 5, 6] we will consider median as 3 (and not 3.5).
Example
buildUrl({
    name: 'toto',
    timestamps: [
        1508349990,
        1508350000,
        1508357300,
    ],
}));
should return
https://server/record?name=toto&duration=2h1min50s&median=0h0min10s
Please, ensure your code is syntactically correct before submitting.
You can test your code as much as you want. */ 


//function buildUrl(data) {
    //const url = 'https://server/record?';

//BuildUrl function

function buildUrl(data) {
    
    const { name, timestamps } = data;
  
    // Filter the timestamps array to keep only valid timestamps
      
    const validTimestamps = timestamps.filter(t => Number.isInteger(t) && t > 0);
  
    // Sort the valid timestamps array in ascending order
      
    validTimestamps.sort((a, b) => a - b);
  
    // Calculate the overall duration
      
    const duration = getDurationLabel(validTimestamps[0], validTimestamps[validTimestamps.length - 1]);
  
    // Calculate the median timestamp
      
    const medianIndex = Math.floor(validTimestamps.length / 2);
      
    let medianTimestamp;
      
    if (validTimestamps.length % 2 === 0) {
        
      // If the length is even, the median is the average of the two middle elements
        
      medianTimestamp = (validTimestamps[medianIndex] + validTimestamps[medianIndex - 1]) / 2;
    } else {
        
      // If the length is odd, the median is the middle element
        
      medianTimestamp = validTimestamps[medianIndex];
    }
  
    // Calculate the duration between the oldest timestamp and the median timestamp
      
    const medianDuration = getDurationLabel(validTimestamps[0], medianTimestamp);
  
    // Build the URL using template literals
      
    const url = `https://server/record?name=${name}&duration=${duration}&median=${medianDuration}`;
  
    return url;
  }
  
  // helper function to get the duration label between two timestamps
  
  function getDurationLabel(startTimestamp, endTimestamp) {
      
    const seconds = endTimestamp - startTimestamp;
      
    const minutes = Math.floor(seconds / 60);
      
    const hours = Math.floor(minutes / 60);
      
    const remainingMinutes = minutes % 60;
      
    const remainingSeconds = seconds % 60;
  
    return `${hours}h${remainingMinutes}min${remainingSeconds}s`;
  }
  
      
      
  export default buildUrl;
  
