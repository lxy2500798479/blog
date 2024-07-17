<template>
  <div>
    <sg-navbar></sg-navbar>
    <div class="container">
      <el-row :gutter="30">
        <el-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
          <sg-articlelist></sg-articlelist>
        </el-col>
        <el-col :sm="24" :md="8">
          <sg-rightlist></sg-rightlist>
        </el-col>
      </el-row>
    </div>

    <VueBotUI
      :messages="messageData"
      :options="botOptions"
      :bot-typing="botTyping"
      :input-disable="inputDisable"
      :is-open="false"
      @msg-send="messageSendHandler"
      @init="botStart"
    />
  </div>
</template>

<script>
import { submitQuestion, getRealTimeResponse } from '../api/ai';
import { VueBotUI } from 'vue-bot-ui';
import header from '../components/header.vue';
import articlelist from '../components/articlelist.vue';
import rightlist from '../components/rightlist.vue';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export default {
  name: 'Home',
  data() {
    return {
      messageData: [
        {
          agent: 'bot',
          type: 'text',
          text: '你好，我能帮你做什么？',
          disableInput: false,
        },
      ],
      botOptions: {
        botTitle: 'AI机器人😊',
        colorScheme: '#1b53d0',
        textColor: '#fff',
        bubbleBtnSize: 56,
        animation: true,
        boardContentBg: '#fff',
        botAvatarSize: 32,
        botAvatarImg: 'https://a.520gexing.com/uploads/allimg/2020042909/yqofns4uixi.jpeg', // 机器人头像图片的URL
        msgBubbleBgBot: '#f0f0f0',
        msgBubbleColorBot: '#000',
        msgBubbleBgUser: '#4356e0',
        msgBubbleColorUser: '#fff',
        inputPlaceholder: '请输入消息',
        inputDisableBg: '#fff',
        inputDisablePlaceholder: null,
      },
      botTyping: false,
      inputDisable: false,
      currentBotMessage: '', // 当前bot消息内容
    };
  },
  methods: {
    messageSendHandler(question) {
      submitQuestion(question.text).then(response => {
        const questionId = response;

        const userMessage = {
          agent: 'user',
          type: 'text',
          text: question.text,
        };
        this.messageData.push(userMessage);

        this.currentBotMessage = ''; // 重置当前bot消息内容

        getRealTimeResponse(questionId, (data) => {
          this.currentBotMessage += data;

          // 查找当前正在显示的bot消息
          let botMessage = this.messageData.find(msg => msg.agent === 'bot' && msg.isStreaming);

          if (botMessage) {
            botMessage.text = this.currentBotMessage;
          } else {
            botMessage = {
              agent: 'bot',
              type: 'text',
              text: this.currentBotMessage,
              isStreaming: true
            };
            this.messageData.push(botMessage);
          }
        }, (error) => {
          console.error('SSE 连接错误:', error);
          // SSE连接错误后，确保bot消息标志位更新
          const botMessage = this.messageData.find(msg => msg.agent === 'bot' && msg.isStreaming);
          if (botMessage) {
            botMessage.isStreaming = false;
          }
        });
      });
    },
    botStart() {
      console.log("Bot started");
    }
  },
  components: {
    'sg-navbar': header,
    'sg-articlelist': articlelist,
    'sg-rightlist': rightlist,
    VueBotUI
  },
  created() {
    console.log("Home component created");
  }
}
</script>

<style>
/* 添加你的样式 */
</style>
