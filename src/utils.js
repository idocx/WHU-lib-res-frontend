const defaultValues = {
  userInfo: {
    username: "201543321543"
  },
  startEndTime: {
    startTime: 600,
    endTime: 720
  },
  libRoom: {
    lib: 0,
    room: 12
  },
  seatOptions: {
    window: 0,
    plugger: 0
  }
}

const options = {  
  libRoomOptions: [
    {
      value: 0,
      label: "总馆",
      children: [
        {
          value: 11,
          label: "A1"
        },
        {
          value: 12,
          label: "A2"
        },
        {
          value: 13,
          label: "A3"
        },
        {
          value: 14,
          label: "A4"
        },
        {
          value: 15,
          label: "A5"
        },
        {
          value: 16,
          label: "E1"
        },
        {
          value: 17,
          label: "E2"
        }
      ]
    },
    {
      value: 1,
      label: "信图",
      children: [
        {
          value: 21,
          label: "不知道"
        }
      ]
    },
    {
      value: 2,
      label: "不限场馆"
    }
  ],
  windowOptions: [
    {value: 1, "label": "靠窗"},  
    {value: 2, "label": "不靠窗"},
    {value: 0, "label": "不限"}
  ],
  pluggerOptions: [
    {value: 1, "label": "有插座"},
    {value: 2, "label": "无插座"},
    {value: 0, "label": "不限"}
  ]
}

function translate(value) {
  switch (value) {
    case "check":
      return "查看空闲";
    case "reserve":
      return "预约";
    case "cancel":
      return "取消";
    default:
      return ""
  }
}

function getJob(values, cancel, callback) {
  const handleRequest = async () => {
    return new Promise((resolve) => {
      resolve();
    })
      .then(() => {
        if (cancel) {
          return `${translate(values.operation)}操作已取消`
        } 
        else {
          return sendRequest(values)
        }
      })
      .then((response) => {
        callback(response);
      })
  }
  return { 
    name: cancel ? "cancel" : values.operation,
    request() {
      handleRequest();
    }
  }
}

// TODO: Backend entrance
function getDefaultValue() {
  return defaultValues;
}

function getOptions() {
  return options;
}

function calculateWaitingTime(values) {
  return 3;
}

function sendRequest(values) {
  const message = JSON.stringify(values);
  return message;
}

export { 
  getDefaultValue, 
  getOptions,
  calculateWaitingTime, 
  sendRequest,
  translate,
  getJob
};
