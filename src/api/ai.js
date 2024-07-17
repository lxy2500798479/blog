import request from "@/utils/request";

// 提交问题并返回标识符
export function submitQuestion(question) {
  return request({
    url: "/submitQuestion",
    method: "post",
    data: { question }
  });
}

// 使用EventSource获取实时响应
export function getRealTimeResponse(questionId, onMessage, onError) {
  const eventSource = new EventSource(`https://lovewx.cc/askAi?questionId=${questionId}`);

  eventSource.onmessage = (event) => {
    onMessage(event.data);
  };

  eventSource.onerror = (error) => {
    onError(error);
    eventSource.close();
  };

  return eventSource;
}
