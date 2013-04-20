var testGroups;

function onload() {
    var commonQuestionText = "几道题答不出？";
    var howDidItGo = "执行情况如何?";

    var testGroup1应知应会 = new testGroup("应知应会", [
        new testItem("相关法律法规", 5, 1, "几处答不出？"),
        new testItem("输气管道保护所有题目", 8, 2, commonQuestionText),
        new testItem("职责、工作标准", 4, 1, commonQuestionText),
        new testItem("清楚并掌握各自管辖区段的风险点、工作难点、预防预控重点", 8, 2, commonQuestionText),
        new testItem("熟悉辖区内管道设施分布情况、自然条件、社会情况", 5, 2, commonQuestionText)]);

    var testGroup2管道保护宣传 = new testGroup("管道保护宣传", [
        new testItem("每月做宣传计划并上报", 2, 2, "是否做了宣传，是否到位？", true),
        new testItem("场站对管道沿线特殊人群进行专门宣传，有图片、有记录", 3, 3, "是否做了宣传，是否到位？", true),
        new testItem("每件宣传品有发放记录", 3, 0, howDidItGo, false, [
            new fault("没有记录", 2),
            new fault("与实际情况不符", 1)]),
        new testItem("每年冬末春初针对清淤、植树进行宣传", 5, 0, howDidItGo, false, [
            new fault("宣传不到位", 2),
            new fault("无图片、无记录", 3)]),
        new testItem("在日常巡护过程中，是否将管道泄露可能造成的危害及应急处理措施告知沿线居民", 4, 0, howDidItGo, false, [
            new fault("无相关内容", 2),
            new fault("了解不全", 1),
            new fault("不了解", 1)]),
        new testItem("是否按照管理处安排及时有效地开展信息员走访工作，慰问品是否发放到位", 3, 0, howDidItGo, false, [
            new fault("走访不全面", 1),
            new fault("没有发放慰问品", 1),
            new fault("记录不全", 1)])]);

    var testGroup3长效机制 = new testGroup("长效机制建立情况", [
        new testItem("场站每月向区（县）公安或当地派出所、安监部门汇报所辖段线路日常情况、联席制度情况并做好记录。", 4, 1, "每月的记录、图片，书面文件来往及回执。四项中缺了几项？"),
        new testItem("场站对违章等危及管道、管道附属设施安全的情况，及时向区（县）公安、当地派出所、安监等相关部门汇报、协调，并能及时配合协调解决、处理，做好长效机制建立记录", 4, 0, "执行情况如何？", false, [
            new fault("没有及时汇报", 2),
            new fault("不配合 无记录", 2)]),
        new testItem("建立所辖区段各级政府部门联系台帐，并及时更新，遇有问题能及时向相关部门报告", 4, 0, howDidItGo, false, [
            new fault("没有资料", 2),
            new fault("资料不全", 2)]),
        new testItem("是否将辖区内管道位置信息，防汛、防恐、应急抢修等应急预案，联系方式及报警电话等告知辖区县、市级政府机构，与地方建立有效的应急联动机制。", 3, 1, "报送相关文件，回执签字，现场照片，三项中缺了几项？")
    ]);

    var testGroup4管道周边工程管理 = new testGroup("管道周边工程管理", [
        new testItem("场站每季度到县区相关部门收集一次管道周边工程施工信息、每月到乡镇相关部门收集一次管道周边工程施工信息，每周到村组收集一次管道周边工程施工信息，对信息落实专人进行跟踪。", 8, 2, "少收集或者没收集几次？"),
        new testItem("及时对管道周边工程施工现场进行管道位置的复测，设立临时标识，向第三方施工进行现场交底", 10, 0, howDidItGo, false, [
            new fault("没有联合现场勘查", 7),
            new fault("没有文字、图片", 3)]),
        new testItem("管道安全范围内周边工程施工方案是否报批及时", 10, 5, "有几次方案没有得到审批而动土？"),
        new testItem("管道周边工程业主方或施工方需要缴纳一定安全抵押金的缴纳安全抵押金", 8, 4, "几次没有缴纳安全抵押金？"),
        new testItem("对管道周边工程实施“点对点” 全程监护，监护人员应掌握应知应会知识", 10, 0, howDidItGo, false, [
            new fault("没有实行点对点监护", 5),
            new fault("抽查监护人回答不上来的", 5)]),
        new testItem("与第三方业主、施工单位建立每天联系制度，并做好联系跟踪记录和图片存档，工程结束后与周边工程业主联合初验收，并做好相应的标牌、标识设施", 8, 0, howDidItGo, false, [
            new fault("没有每天联系制度", 2),
            new fault("没有相关跟踪记录", 2),
            new fault("没有与第三方业主联合验收", 2),
            new fault("需要做标牌、标识的做标牌设施没有做", 2)]),
        new testItem("辖区内管道是否发生第三方施工事故(事件）或光缆受损事故", 10, 0, howDidItGo, false, [
            new fault("发生一处管道上方机械动土事件", 3),
            new fault("每发生一处光缆受损事故", 7)
        ]),
        new testItem("是否对辖区内易发生修路、挖渠、清淤等第三方破坏管段进行统计；并加强巡护。", 4, 0, howDidItGo, false, [
            new fault("无统计表", 2),
            new fault("未对重点管道进行巡护", 2)
        ]),
        new testItem("辖区内管道安全范围内是否发生违章占压或违章施工现象，是否上报并按要求进行协调处理", 12, 0, howDidItGo, false, [
            new fault("发生一处管道违章占压。", 3),
            new fault("每发生一处违章施工", 5),
            new fault("未按管理处要求及时进行协调处理", 4)
        ])
    ]);

//    var testGroup5线路巡线 = new testGroup("线路巡线、阀室看护管理", [
//        new testItem("场站每季度到县区相关部门收集一次管道周边工程施工信息、每月到乡镇相关部门收集一次管道周边工程施工信息，每周到村组收集一次管道周边工程施工信息，对信息落实专人进行跟踪。", 8, 2, "少收集或者没收集几次？"),
//    ]);

    testGroups = [testGroup1应知应会,
        testGroup2管道保护宣传,
        testGroup3长效机制,
        testGroup4管道周边工程管理];

    ko.observableArray(testGroups);
    ko.applyBindings({testGroups:testGroups});
}

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

function calculate() {
    var score = testGroups.reduce(function (prevGrpValue, grp) {
        return prevGrpValue + grp.items.reduce(function (prevItmValue, itm) {
            return prevItmValue + itm.getScore();
        }, 0);
    }, 0);
    alert("最终得分为：" + score);
}