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

function formatTime(value) {
  const value_60 = String(Math.floor(value / 60)).padStart(2, '0'),
        value__60 = String(value - value_60 * 60).padStart(2, '0');
  return `${value_60}:${value__60}`
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

function getJob(values, oldJob, writeMessage) {
  // STOP PENDING
  if (oldJob && values.operation && oldJob.name === values.operation) {
    return {
      name: "cancel",
      pendingTime: 0,
      request() {
        return stopPending(values, writeMessage);
      }
    }
  } 
  // NORMAL REQUEST 
  else if (!oldJob && values.operation) {
    return {
      name: values.operation,
      pendingTime: calculateWaitingTime(values),
      request() {
        return submitRequest(values, writeMessage)
      }
    }
  }
}

function stopPending(values, writeMessage) {
  return new Promise((resolve) => {
    writeMessage(`${translate(values.operation)}操作已取消`)
    resolve();
  })
}

function submitRequest(values, writeMessage) {
  const request = () => {
    // CASE 1: conduct reservation
    const message = JSON.stringify(values);
    writeMessage(message);
  }
  return new Promise((resolve) => {
    request()
    resolve()
  })
}

function getDefaultValue() {
  return defaultValues;
}

function getOptions() {
  return options;
}

function calculateWaitingTime(values) {
  return 3;
}

export { 
  getDefaultValue, 
  getOptions,
  formatTime,
  translate,
  getJob
};
