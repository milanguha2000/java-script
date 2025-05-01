const course = {
    courseName : "javascript",
    coursePrice : "999",
    courseInstructor : "Milan"
}
//console.log(course.courseInstructor);
const {courseInstructor : instructor} = course
//console.log(courseInstructor);
console.log(instructor);


// ++++++++++++++++++++++++++ JSON API ++++++++++++++++++++++++++

// In api it looks like an object but there is no object name . In api key and value comes as a String.

// {
//     "name" : "Milan",
//     " courseName" : "javascript",
//     "price" : "free"
// }

// In api , data come as Array also . like this :-
[
    {},
    {},
    {}
]
