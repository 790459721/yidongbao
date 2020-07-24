/*
 * @Author: qinsensen
 * @Date: 2020-07-16 14:04:01
 * @Description: 
 */
const jobTitleList = ['主任医师', '副主任医师', '主治医师', '住院医师', '医师', '助理医师', '药师', '药士', '主任护师', '副主任护师', '主管护师', '小儿护师', '护师', '护士', '按摩师']

// 科室list
const departmentList = [
    {
        mainDepartment: '内科',
        mainId:1,
        childrenDepartment: [
            {
                id:1,
                department: '心血管内科'
            },
            {
                id:2,
                department: '普通内科'
            },
            {
                id:3,
                department: '老年病科'
            },
            {
                id:4,
                department: '感染科'
            },
            {
                id:5,
                department: '血液科'
            },
            {
                id:6,
                department: '肾内科'
            },
            {
                id:7,
                department: '呼吸内科'
            },
            {
                id:8,
                department: '风湿免疫科'
            },
            {
                id:9,
                department: '内分泌科'
            },
            {
                id:10,
                department: '消化内科'
            },
            {
                id:11,
                department: '神经内科'
            },
            {
                id:12,
                department: '职业病科'
            },
        ]
    },
    {
        mainDepartment: '外科',
        mainId: 2,
        childrenDepartment: [
            {
                id:1,
                department: '普外科'
            },
            {
                id:2,
                department: '血管外科'
            },
            {
                id:3,
                department: '肛肠科'
            },
            {
                id:4,
                department: '肝胆外科'
            },
            {
                id:5,
                department: '泌尿外科'
            },
            {
                id:6,
                department: '乳腺外科'
            },
            {
                id:7,
                department: '心血管外科'
            },
            {
                id:8,
                department: '神经外科'
            },
            {
                id:9,
                department: '烧伤外科'
            },
            {
                id:10,
                department: '麻醉科'
            },
            {
                id:11,
                department: '疼痛科'
            },
            {
                id:12,
                department: '骨科'
            },
            {
                id:13,
                department: '胸心外科'
            },
            {
                id:14,
                department: '消化外科'
            },
            {
                id:15,
                department: '整形美容科'
            },
            {
                id:16,
                department: '脑外科'
            },
        ]
    },
    {
        mainDepartment: '妇产科',
        mianId: 3,
        childrenDepartment: [
            {
                id:1,
                department: '计划生育科'
            },
            {
                id:2,
                department: '产科'
            },
            {
                id:3,
                department: '妇科'
            },
            {
                id:4,
                department: '妇幼保健科'
            },
        ]
    },
    {
        mainDepartment: '儿科',
        mianId: 4,
        childrenDepartment: [
            {
                id:1,
                department: '小儿骨科'
            },
            {
                id:2,
                department: '小儿外科'
            },
            {
                id:3,
                department: '小儿营养保健科'
            },
            {
                id:4,
                department: '新生儿科'
            },
            {
                id:5,
                department: '儿科'
            },
        ]
    },
    {
        mainDepartment: '眼科',
        mainId: 5,
        childrenDepartment:[
            {
                id:1,
                department: '眼科'
            },
        ]
    },
    {
        mainDepartment: '口腔科',
        mainId: 6,
        childrenDepartment:[
            {
                id:1,
                department: '口腔修复科'
            },
            {
                id:2,
                department: '颌面外科'
            },
            {
                id:3,
                department: '口腔科'
            },
            {
                id:4,
                department: '口腔畸形科'
            },
        ]
    },
    {
        mainDepartment: '耳鼻咽喉头颈外科',
        mainId: 7,
        childrenDepartment:[
            {
                id:1,
                department: '耳鼻咽喉头颈科'
            },
        ]
    },
    {
        mainDepartment: '肿瘤科',
        mainId: 8,
        childrenDepartment:[
            {
                id:1,
                department: '肿瘤科'
            },
        ]
    },
    {
        mainDepartment: '皮肤性病科',
        mainId: 9,
        childrenDepartment:[
            {
                id:1,
                department: '皮肤性病科'
            },
        ]
    },
    {
        mainDepartment: '精神心理科',
        mainId: 10,
        childrenDepartment:[
            {
                id:1,
                department: '精神科'
            },
            {
                id:2,
                department: '心理科'
            },
        ]
    },
    {
        mainDepartment: '中医科',
        mainId: 11,
        childrenDepartment:[
            {
                id:1,
                department: '中医科'
            },
        ]
    },
    {
        mainDepartment: '中西医结合科',
        mainId: 12,
        childrenDepartment:[
            {
                id:1,
                department: '中西医结合内科'
            },
            {
                id:2,
                department: '中西医结合外科'
            },
        ]
    },
    {
        mainDepartment: '传染病科',
        mainId: 13,
        childrenDepartment:[
            {
                id:1,
                department: '传染病科'
            },
            {
                id:2,
                department: '肝病科'
            },
        ]
    },
    {
        mainDepartment: '康复科',
        mainId: 14,
        childrenDepartment:[
            {
                id:1,
                department: '康复科'
            }
        ]
    },
    {
        mainDepartment: '营养科',
        mainId: 15,
        childrenDepartment:[
            {
                id:1,
                department: '营养科'
            }
        ]
    },
    {
        mainDepartment: '医学影像和放射科',
        mainId: 16,
        childrenDepartment:[
            {
                id:1,
                department: '超声波科'
            },
            {
                id:1,
                department: '放射医学科'
            },
            {
                id:1,
                department: '核医学科'
            },
        ]
    },
    {
        mainDepartment: '全科',
        mainId: 17,
        childrenDepartment:[
            {
                id:1,
                department: '全科'
            }
        ]
    },
    {
        mainDepartment: '急诊科',
        mainId: 18,
        childrenDepartment:[
            {
                id:1,
                department: '急诊科'
            }
        ]
    },
    {
        mainDepartment: '药剂科',
        mainId: 19,
        childrenDepartment:[
            {
                id:1,
                department: '药剂科'
            }
        ]
    },
    {
        mainDepartment: '重症医学科',
        mainId: 20,
        childrenDepartment:[
            {
                id:1,
                department: '重症医学科'
            }
        ]
    },
    {
        mainDepartment: '病理检验科',
        mainId: 21,
        childrenDepartment:[
            {
                id:1,
                department: '病理科'
            },
            {
                id:2,
                department: '临床医学检验科'
            }
        ]
    },
    {
        mainDepartment: '辅助生殖科',
        mainId: 22,
        childrenDepartment:[
            {
                id:1,
                department: '辅助生殖科'
            }
        ]
    },
]

const sexList = [ '男', '女']
export {
    jobTitleList,
    departmentList,
    sexList
}