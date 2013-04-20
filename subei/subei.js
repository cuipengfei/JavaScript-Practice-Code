var testGroups;

function onload() {
    var commonQuestionText = "几道题答不出？";
    var howDidItGo = "执行情况如何?";

    var testGroup1 = new testGroup("应知应会", [
        new testItem("相关法律法规", 5, 1, "几处答不出？"),
        new testItem("输气管道保护所有题目", 8, 2, commonQuestionText),
        new testItem("职责、工作标准", 4, 1, commonQuestionText),
        new testItem("清楚并掌握各自管辖区段的风险点、工作难点、预防预控重点", 8, 2, commonQuestionText),
        new testItem("熟悉辖区内管道设施分布情况、自然条件、社会情况", 5, 2, commonQuestionText)]);

    var testGroup2 = new testGroup("管道保护宣传", [
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

    var testGroup3 = new testGroup("长效机制建立情况", [
        new testItem("场站每月向区（县）公安或当地派出所、安监部门汇报所辖段线路日常情况、联席制度情况并做好记录。", 4, 1, "每月的记录、图片，书面文件来往及回执。四项中缺了几项？"),
        new testItem("场站对违章等危及管道、管道附属设施安全的情况，及时向区（县）公安、当地派出所、安监等相关部门汇报、协调，并能及时配合协调解决、处理，做好长效机制建立记录", 4, 0, "执行情况如何？", false, [
            new fault("没有及时汇报", 2),
            new fault("不配合 无记录", 2)]),
        new testItem("建立所辖区段各级政府部门联系台帐，并及时更新，遇有问题能及时向相关部门报告", 4, 0, howDidItGo, false, [
            new fault("没有资料", 2),
            new fault("资料不全", 2)]),
        new testItem("是否将辖区内管道位置信息，防汛、防恐、应急抢修等应急预案，联系方式及报警电话等告知辖区县、市级政府机构，与地方建立有效的应急联动机制。", 3, 1, "报送相关文件，回执签字，现场照片，三项中缺了几项？")
    ]);

    var testGroup4 = new testGroup("管道周边工程管理", [
        new testItem("场站每季度到县区相关部门收集一次管道周边工程施工信息、每月到乡镇相关部门收集一次管道周边工程施工信息，每周到村组收集一次管道周边工程施工信息，对信息落实专人进行跟踪。", 8, 2, "少收集或者没收集几次？"),
        new testItem("及时对管道周边工程施工现场进行管道位置的复测，设立临时标识，向第三方施工进行现场交底", 10, 0, howDidItGo, false, [
            new fault("没有联合现场勘查", 7),
            new fault("没有文字、图片", 3)]),
        new testItem("管道安全范围内周边工程施工方案是否报批及时", 10, 5, "有几次方案没有得到审批而动土？"),
        new testItem("与管道周边工程相关单位签订安全协议", 20, 10, "几处没有安全协议?"),
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

    var testGroup5 = new testGroup("线路巡线、阀室看护管理", [
        new testItem("巡线或从事管道保护相关工作时着工装", 3, 1, "几人次违反？"),
        new testItem("对管道沿线200米范围动土及时发现，进行调查和汇报，10米范围占压处理及时得当", 4, 0, howDidItGo, false, [
            new fault("200米范围动土不能及时发现，不进行调查或不汇报", 2),
            new fault("10米范围占压处理不及时得当", 2)]),
        new testItem("是否出现新的违章占压，对新出现的违章占压及时清理并上报", 6, 0, howDidItGo, false, [
            new fault("新出现违章占压", 3),
            new fault("隐瞒不报或不积极处理", 3)]),
        new testItem("站长每周检查现场不少于3天，每周抽查巡线员不少于3人，每周与巡线员完整徒步巡线不少于30公里，每周走访、电话联系巡线员不少于10人，每周查看所有周边工程施工点不少于2遍。以上工作要有记录。", 5, 1, "有几项不合格？"),
        new testItem("线路管理员每周检查现场工作时间不少于5天，每天检查巡线员不少于2人，每天与巡线员完整的徒步巡线不少于10公里，每天走访和电话联系巡线员不少于3人，每天查所有周边工程施工点至少1遍。以上工作要有记录。", 5, 1, "有几项不合格？"),
        new testItem("每周要对所辖管线巡线员GPS情况进行及时统计上报，每周合格率不得低于90%", 4, 1, "有几次不及时或者合格率不到90%的情况？"),
        new testItem("根据管线上“四桩一牌”的变化，及时更新完善巡线示意图", 3, 3, "是否定期更新完善巡线示意图？", true),
        new testItem("为巡线员、阀室看护员建立管理台帐并对其定期考核", 2, 0, howDidItGo, false, [
            new fault("未建立巡线员、阀室看护员管理台帐", 1),
            new fault("巡线员、阀室看护员考核记录不全", 1)]),
        new testItem("根据作业指导书开展准确的高后果区识别与分析，建立高后果区识别台帐，并及时更新。", 2, 0, howDidItGo, false, [
            new fault("现场查看高后果区台帐及单项台帐，发现未及时更新", 1),
            new fault("发现内容不全", 1)]),
        new testItem("阀室巡检记录是否齐全、规范，特殊时期场站保卫巡检记录是否齐全、规范，是否发生非法入侵、盗窃、打孔盗气等事件，保卫器材是否保存完好。", 8, 0, howDidItGo, false, [
            new fault("查看阀室、场站巡检记录，记录不全", 2),
            new fault("虚报", 2),
            new fault("发生非法入侵、盗窃、打孔盗气等事件", 2),
            new fault("保卫器材人为丢失或损坏", 2)]),
        new testItem("国家重大节日等特殊时期是否按照管理处要求认真开展场站及线路安全保卫工作，并能与地方公安等部门保持联系，定期开展小规模应急演练。", 3, 0, howDidItGo, false, [
            new fault("查看日报或现场抽查保卫工作情况，未能认真开展安全保卫工作", 1),
            new fault("未能与地方公安部门保持联系", 2)])
    ]);

    var testGroup6 = new testGroup("阴极保护设施及运行管理", [
        new testItem("监督检查巡线员电位测试，确保测试结果真实，及时上报电位报表。", 2, 1, "几个测试桩不合格？"),
        new testItem("每月抽查阴极保护设备、管道电位测试仪器完好", 3, 1, "几台不完好（备用设备正常检修除外）？"),
        new testItem("对管道相关仪器设备（雷迪、恒电位仪、万用表、GPS等）能熟练操作或使用", 4, 1, "几名管道管理人员回答不上或不会操作？"),
        new testItem("管道检测仪器是否保存完好，检测仪器使用有无记录；阴极保护系统备品备件是否保存完好，备品备件消耗后是否及时上报补充。", 6, 0, howDidItGo, false, [
            new fault("检测仪器无台帐", 1),
            new fault("无使用记录", 1),
            new fault("检测仪器人为损坏", 1),
            new fault("损坏未及时上报", 1),
            new fault("备品备件缺失", 1),
            new fault("消耗后未及时上报补充", 1)
        ])
    ]);

    var testGroup7 = new testGroup("管道四桩一牌管理", [
        new testItem("熟悉“四桩一牌”、人手井的设置情况，有图片、有档案，统计齐全，建立台帐，桩位准确率100%", 5, 0, howDidItGo, false, [
            new fault("站队人员不能及时找到抽检的桩号位置", 2),
            new fault("长时间找不到", 3)
        ]),
        new testItem("对“四桩一牌”的管理要落实到个人，及时上报“四桩一牌”缺失、移位、破损情况并建立台帐", 5, 1, "出现几处缺失、移位、损坏？"),
        new testItem("场站对“四桩一牌”进行日常检查、简单维护，维护有台帐。", 5, 1, "几次没有进行日常维护？")
    ]);

    var testGroup8 = new testGroup("基础工作管理", [
        new testItem("是否对管道管理各项法规、标准规范、程序文件、作业指导书进行有效分类和有效的集中控制", 4, 2, "查看各项法规、标准规范、程序文件、作业指导书存放位置，缺失或遗漏几次？"),
        new testItem("周边工程管理、周边工程竣工资料、防洪防汛基础、管理处文件、现场监护资料、管道安全协议、宣传品发放记录、巡护人员资料、应急预案、沿线违章占压等资料齐全。", 4, 1, "几项缺少或不全？"),
        new testItem("建立和不断完善水工设施台帐", 4, 0, howDidItGo, false, [
            new fault("不完善", 2),
            new fault("没有建立", 4)
        ]),
        new testItem("按要求在沿线各村设定信息员，建立信息员管理台帐，了解信息收集制度", 7, 0, howDidItGo, false, [
            new fault("查看信息员管理台帐，电话沟通信息员了解信息收集情况，无台帐", 2),
            new fault("超过1个月未收集信息", 3),
            new fault("不了解信息管理制度", 2)
        ]),
        new testItem("是否按管理处要求上报管道相关工作总结、周报、月报、半年报、水毁日备案表", 6, 2, "缺少几次上报？"),
        new testItem("是否定期对管道本体属性数据、管道施工数据、管道检测数据、管道周边地理环境及人文数据、管道运行数据、管道走向图、附属设施等基础资料台帐，穿越、水库等潜在风险点台帐，盖板涵、盖板、管涵等设施台帐进行核实，发现与实际不符或内容不全的及时进行修正。", 5, 1, "发现几处与实际不符或遗漏？")
    ]);

    var testGroup9 = new testGroup("防汛工作", [
        new testItem("是否编制详细的防汛预案，防汛物资准备情况充足，满足抢险需要", 7, 0, howDidItGo, false, [
            new fault("无防汛预案", 2),
            new fault("无防汛物资管理台帐或者库存不符合", 2),
            new fault("防汛物资消耗未及时上报补充", 3)
        ]),
        new testItem("汛情水毁是否及时上报，1立以下水毁是否监督巡线员及时处理", 5, 0, howDidItGo, false, [
            new fault("查看汛期日报及水毁台帐，发现水毁未及时上报", 2),
            new fault("发现1立一下小型水毁未及时处理", 3)
        ]),
        new testItem("是否建立水库、河流穿越台帐；汛期以后是否及时上线巡查，汛期掌握相关河流水文、降雨情况", 5, 0, howDidItGo, false, [
            new fault("查看水库河流台帐，无台帐", 2),
            new fault("内容不全", 1),
            new fault("查看巡线日志，雨后未上线巡查", 1),
            new fault("河流水文相关资料，无警戒水位、汛期排洪等相关资料", 1)
        ]),
        new testItem("是否与当地水利、防汛指挥部建立畅通的联系机制，并将防汛预案纳入地方抢险预案？", 3, 3, "", true)
    ]);

    testGroups = [
        testGroup1,
        testGroup2,
        testGroup3,
        testGroup4,
        testGroup5,
        testGroup6,
        testGroup7,
        testGroup8,
        testGroup9];

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