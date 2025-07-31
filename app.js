console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count)
{
    if (count >= 0)
        for (let i = 0; i <= count; i++)
            if (i % 2 === 1 | i % 2 === -1)
                console.log(`Is odd: ${i}.`);

    else if (count < 0)
        for (let i = 0; i >= count; i--)
            if (i % 2 === 1 | i % 2 === -1)
                console.log(`Is odd: ${i}.`);
}

const count = Math.floor(Math.random() * 101) - 50;
printOdds(count);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age)
{
    if (age == undefined)
    {
        console.log("No age given.")
        return;
    }

    var user = "Buddy";
    if (userName?.trim())
        user = userName;

    var aboveSixteen = `Congrats ${user}, you can drive!`;
    var belowSixteen = `Sorry ${user}, but you need to wait until you're 16.`;

    if (age >= 16)
        console.log(aboveSixteen);
    else if (age < 16)
        console.log(belowSixteen);
}

checkAge("", 16);
checkAge("Tony", 15);
checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function printPoint(x, y)
{
    let result = `(${x}, ${y})`;

    switch (true)
    {
        case (x === 0 && y === 0): result += " Point is at the origin.";
            break;

        case (x === 0): result += " Point is on the y axis.";
            break;

        case (y === 0): result += " Point is on the x axis.";
            break;

        case (x > 0 && y > 0): result += " Point is in quadrant 1.";
            break;

        case (x < 0 && y > 0): result += " Point is in quadrant 2.";
            break;

        case (x < 0 && y < 0): result += " Point is in quadrant 3.";
            break;

        case (x > 0 && y < 0): result += " Point is in quadrant 4.";
            break;

        default: result += " Unable to plot point."
            break;
    }

    console.log(result);
}

printPoint(1, 0);
printPoint(0, 1);
printPoint(-1, -1);
printPoint(1, 1);
printPoint(1, -1);
printPoint(-1, 1);
printPoint(0, 0);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function getTriangleType(a, b, c)
{
    let status = "The triangle is"
    if (a <= 0 || b <= 0 || c <= 0)
        return `${status} not a valid triangle.`;

    if (a + b <= c || a + c <= b || b + c <= a)
        return `${status} not a valid triangle.`;

    if (a === b && b === c)
        return `${status} equilateral.`;

    else if (a === b || b === c || a === c)
        return `${status} isosceles.`;

    else
        return `${status} scalene.`;
}

console.log(getTriangleType(1, 1, 1));
console.log(getTriangleType(1, 2, 2));
console.log(getTriangleType(2, 4, 3));
console.log(getTriangleType(1, 2, 3));
console.log(getTriangleType(0, 0, 0));
console.log(getTriangleType(0, 1, 0));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function printPlanData(planLimit, day, usage)
{
    let daysLeft = 30 - day;
    let averageDailyUsage = (usage / day).toFixed(2);
    let estimateDailyUse = (planLimit / 30).toFixed(2);
    let estimatedOverage = (averageDailyUsage * daysLeft + usage - planLimit).toFixed(2);
    let goalDailyUsage = ((planLimit - usage) / daysLeft).toFixed(2);

    let line1 = `${day} days used, ${daysLeft} days remaining\nAverage daily use: ${averageDailyUsage} GB/day\n`;
    let line2 = "";
    let line3 = `To stay below your data plan, use no more than ${goalDailyUsage} GB/day.`;

    if (averageDailyUsage > estimateDailyUse)
    {
        line2 = `You are exceeding your average daily use (${estimateDailyUse} GB/day),\n`
            + `Continuing this high usage, you'll exceed your data plan by ${estimatedOverage} GB.\n`;
    }
    else if (averageDailyUsage < estimateDailyUse)
    {
        line2 = `You are below your average daily use (${estimateDailyUse} GB/day),\n`
            + `Continuing this low usage, you will not exceed your data plan.\n`;
    }
    else
    {
        line2 = `You are on par with your average daily use (${estimateDailyUse} GB/day),\n`
            + `Continuing this rate of usage, you will not exceed your data plan.\n`
    }

    console.log(line1 + line2 + line3);
}

printPlanData(100, 29, 0);
printPlanData(10, 5, 6);
printPlanData(30, 10, 10);