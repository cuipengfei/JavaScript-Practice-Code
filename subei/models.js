function testItem(testName, fullScore, eachFaultScore, questionText, allOrNothing, faults) {
    this.testName = testName;
    this.fullScore = fullScore;
    this.eachFaultScore = eachFaultScore;
    this.questionText = questionText;
    this.faults = faults;
    this.isMulti = faults;
    this.options = generateOptions();
    this.selectedOption = undefined;

    var that = this;

    this.getScore = function () {
        if (allOrNothing) {
            return that.selectedOption === "是" ? fullScore : 0;
        } else {
            if (faults) {
                var faultPoints = faults.reduce(function (prevValue, currentF) {
                    return prevValue + (currentF.isViolated ? currentF.faultPoints : 0);
                }, 0);
                var score = fullScore - faultPoints;

                return score < 0 ? 0 : score;
            } else {
                var score = fullScore - eachFaultScore * that.selectedOption;
                return score < 0 ? 0 : score;
            }
        }
    }

    function generateOptions() {
        return allOrNothing ? ["是", "否"] :
            generateBasedOnFullScoreAndEachFault();

        function generateBasedOnFullScoreAndEachFault() {
            if (eachFaultScore !== 0) {
                var max = fullScore / eachFaultScore;
                fullScore % eachFaultScore === 0 ? max = max : max = max + 1;
                var optionsArray = [];
                for (i = 0; i <= max; i++) {
                    optionsArray.push(i);
                }
                return optionsArray;
            }
        }
    }
}

function testGroup(groupName, items) {
    this.groupName = groupName;
    this.items = items;
}

function fault(faultName, faultPoints) {
    this.faultName = faultName;
    this.faultPoints = faultPoints;
    this.isViolated = false;
}
