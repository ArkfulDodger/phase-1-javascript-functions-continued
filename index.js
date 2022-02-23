function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(param="go to the office") {
    return `This Monday, I will ${param}.`;
}

function wrapAdjective(flair="*") {
    return function (adjective="special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}