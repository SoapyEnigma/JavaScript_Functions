console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count)
{
    const step = count >= 0 ? 1 : -1;
    for (let i = 0; step > 0 ? i <= count : i >= count; i += step)
        if (i % 2 !== 0)
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

function printPlanData(planLimit, daysUsed = 1, dataUsage = 0)
{
    if (planLimit === 0)
    {
        console.log("Failed to get Plan Data information. Missing Limit.");
        return;
    }

    if (daysUsed >= 30)
    {
        console.log("Failed to get Plan Data information. Parameter 'daysUsed' is greater than 30.");
        return;
    }

    //
    // More error catching here ie catching negatives
    //

    const TOTAL_DAYS = 30;
    const daysLeft = TOTAL_DAYS - daysUsed;

    const averageDailyUsage = (dataUsage / daysUsed);
    const estimateDailyUse = (planLimit / TOTAL_DAYS);
    const estimatedOverage = (averageDailyUsage * TOTAL_DAYS - planLimit);
    const goalDailyUsage = ((planLimit - dataUsage) / daysLeft);

    let summary = `${daysUsed} days used, ${daysLeft} days remaining\n`;
    summary += `Average daily use: ${averageDailyUsage.toFixed(2)} GB/day\n`;

    if (averageDailyUsage > estimateDailyUse)
    {
        summary += `You are exceeding your average daily use (${estimateDailyUse.toFixed(2)} GB/day),\n`;
        summary += `Continuing this high usage, you'll exceed your data plan by ${estimatedOverage.toFixed(2)} GB.\n`;
    }
    else if (averageDailyUsage < estimateDailyUse)
    {
        summary += `You are below your average daily use (${estimateDailyUse.toFixed(2)} GB/day),\n`;
        summary += `Continuing this low usage, you will not exceed your data plan.\n`;
    }
    else
    {
        summary += `You are on par with your average daily use (${estimateDailyUse.toFixed(2)} GB/day),\n`;
        summary += `Continuing this rate of usage, you will not exceed your data plan.\n`;
    }

    summary += `To stay below your data plan, use no more than ${goalDailyUsage.toFixed(2)} GB/day.`;

    console.log(summary);
}

printPlanData(100, 29, 0);
printPlanData(10, 5, 6);
printPlanData(30, 10, 10);
printPlanData(0);
printPlanData(1, 31);