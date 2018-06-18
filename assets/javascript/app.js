var answerCorrect = false;

// VARIABLES WITH QUESTIONS AND BOOLEAN TO MAKE TRUE/FALSE
var carQuestions = {
    qOne: {
    question: "What are the three main ingredients to make a petrol engine run?",
    choices: {
        a: "fuel, oil, spark",
        b: "cooliant, radiator fluid, water",
        c: "fuel, air, water",
        d: "fuel, air, spark"
        }
    },
    qTwo: {

    },
    qThree: {

    },
    qFour: {

    },
    qFive: {

    }, 
    qSix: {

    },
    qSeven: {

    },
    qEight: {

    },
    qNine: {

    },
    qTen: {

    }
}


$(".question-asked").text(carQuestions.qOne.question);
$(".text-a").html("<h4>" + carQuestions.qOne.choices.a + "</h4>");
$(".text-b").html("<h4>" + carQuestions.qOne.choices.b + "</h4>");
$(".text-c").html("<h4>" + carQuestions.qOne.choices.c) + "</h4>";
$(".text-d").html("<h4>" + carQuestions.qOne.choices.d) + "</h4>";


// CREATE OBJECT NAMED "carQuestions" // USE VARIABLE TO MAKE REUSABLE




// CREATE 10 SUB OJECTS / PROPERTIES SUCH AS "one", "two", etc

// CREATE PROPERTIES FOR EACH SUB OBJECT AS "A", "B", "C", "D"



// HERE WE WILL CREATE A SECOND OBJECT CALLED "carKey"
// IT WILL HAVE PROPERTIES OF THE SUB OBJECT THAT CAN BE MATCHED


// LOGIC
// UPON MATCH OR NOT MATCH
// SAVE SCORE "correctCounter" // "wrongCounter"
// DISPLAY COUNTER AT THE BOTTOM OF THE PAGE

var carKey = {
    qOne: "fuel, oil, spark",
    qTwo: "",
    qThree: "",
    qFour: "",
    qFive: "",
    qSix: "",
    qSeven: "",
    qEight: "",
    qNine: "",
    qTen: ""
}

carImgArr = [
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-00-engine-hoist.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-01-pull-engine.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-02-dash-card-board.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-03-engine-detail.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-04-engine-in-frame.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-05-hood-cut-off.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-06-dash-alumninum.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-07-mohawk-hood.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-08-paint-red.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-09-race-seats.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-10-engine-buttoned-up.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-11-jeff-benji.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-12-gutted-engine-bay.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-13-interior-gutted.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-14-engine-pre-paint.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-15-hood.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-16-dynomat.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-17-paint-black.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-18-painted.jpg",
    "https://s3-us-west-2.amazonaws.com/benji.to/img-fablabracing-19-rear-seat-delete.jpg"
]

$("#random-img").html('<img src="' + carImgArr[Math.floor(Math.random() * (carImgArr.length))] + '"width="400px" ">');
