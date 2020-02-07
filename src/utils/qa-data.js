export const QA_Data = [
  {
    required: true,
    formId: 'a',
    type: 'radio',
    title: '1月17日以来，您是否属于未离开过职场所在地、未与湖北/温州相关人员接触过、小区无确证人员且身体无不适的员工（即非九类人群）',
    options: [
      {
        title: '是',
        value: '1',
        subtitle: '选“是”跳转到第五题'
      },
      {
        title: '否',
        value: '2',
        subtitle: '选“否”跳转到第二题'
      }
    ]
  },
  {
    required: true,
    formId: 'b',
    type: 'radio',
    title: '您是否满足从外地回到职场所在地后已进行自我隔离离14天的复工需求，并符合在此期间未与湖北/温州相关人员接触过，小区无确诊人员且身体无不适的条件？',
    options: [
      {
        title: '是',
        value: '1',
      },
      {
        title: '否',
        value: '2',
        subtitle: '选“否”结束问卷'
      }
    ]
  },
  {
    required: true,
    formId: 'c',
    type: 'input',
    title: '您可用于证明自己满足从外地返回职场所在地后已自我隔离14天条件的凭据是',
    subtitle: '文字描述即可，后续不排除要求提供相应票据及支付记录证明',
    options: [
      {
          placeholder: ''
      }
    ]
  },
  {
    required: true,
    formId: 'd',
    type: 'radio',
    title: '您从外地返回职场所在地使用的交通工具是？',
    options: [
      {
        title: '自驾/亲友拼车',
        value: '1',
      },
      {
        title: '其他公共交通工具',
        value: '2',
      }
    ]
  },
  {
    required: true,
    formId: 'e',
    type: 'radio',
    title: '您的上班通勤工具是',
    options: [
      {
        title: '自驾私家车',
        value: '1'
      },
      {
        title: '走路/骑单车',
        value: '2'
      },
      {
        title: '团队内拼车',
        value: '3'
      },
      {
        title: '打车（的士、滴滴）',
        value: '4'
      },
      {
        title: '其他公共交通工具',
        value: '5'
      }
    ]
  },
  {
    required: true,
    formId: 'f',
    type: 'input',
    title: '您所居住的小区距离确诊新型冠状病毒肺炎病人的小区有多远？（估算值即可）',
    options: [
      {
        placeholder: ''
      }
    ]
  },
  {
    required: true,
    formId: 'g',
    type: 'radio',
    title: '疫情期间，您是否出过小区大门？',
    options: [
      {
        title: '是',
        value: '1'
      },
      {
        title: '否',
        value: '2'
      }
    ]
  },
  {
    required: true,
    formId: 'h',
    type: 'radio',
    title: '您在小区里行动时属于以下哪种情况',
    options: [
      {
        title: '带口罩短时间停留，不与人接触、闲聊',
        value: '1'
      },
      {
        title: '带口罩在小区长时间逛，但不与人接触、闲聊',
        value: '2'
      },
      {
        title: '带口罩在小区长时间逛，与人接触、闲聊',
        value: '3'
      }
    ]
  },
  {
    required: true,
    formId: 'i',
    type: 'input',
    title: '您的姓名',
    options: [
      {
        placeholder: '',  
        preIcon: 'contact'
      }
    ]
  },
  {
    required: true,
    formId: 'j',
    type: 'input',
    title: '您的域账号',
    options: [
      {
        placeholder: '',
      }
    ]
  },
  {
    required: true,
    formId: 'k',
    type: 'radio',
    title: '您的编制',
    options: [
      {
        title: '行编',
        value: '1'
      },
      {
        title: '金服',
        value: '2'
      },
      {
        title: '外包',
        value: '3'
      }
    ]
  },
  {
    required: true,
    formId: 'l',
    title: '请输入您的手机号码',
    type: 'input',
    options: [
      {
        placeholder: '',
        preIcon: 'phonebook'
      }
    ]
  },
  {
    required: true,
    formId: 'm',
    type: 'input',
    title: '您所在的团队',
    options: [
      {
        placeholder: ''
      }
    ]
  },
  {
    required: true,
    formId: 'n',
    type: 'input',
    title: '您所在的职场：（如深圳总行）',
    options: [
      {
        placeholder: ''
      }
    ]
  }
]