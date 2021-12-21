/*
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
 *
 * License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
 *
 * ---------------------------------------------------
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
*/

export function patcher (DICT) {
  // Update EXCEPTIONS dict.
  DICT.EXCEPTIONS = {
    '\u55f2': 'DIA', // DIE 嗲
    '\u78a1': 'ZHOU', // DU 碡
    '\u8052': 'GUO', // GUA 聒
    '\u7094': 'QUE', // GUI 炔
    '\u86b5': 'KE', // HE 蚵
    '\u7809': 'HUA', // HUO 砉
    '\u5b37': 'MO', // MA 嬷 新增
    '\u8e4a': 'XI', // QI 蹊
    '\u4e2c': 'PAN', // QIANG 丬
    '\u9730': 'XIAN', // SAN 霰
    '\u8c49': 'CHI', // SHI 豉
    '\u9967': 'XING', // TANG 饧
    '\u5e27': 'ZHEN', // ZHENG 帧
    '\u828e': 'XIONG', // 芎
    '\u8c01': 'SHUI', // 谁
    '\u94b6': 'KE' // 钶
  }

  // Update UNIHANS dict.
  DICT.UNIHANS[91] = '\u4f15' // FU: 夫 --> 伕
  DICT.UNIHANS[347] = '\u4eda' // XIAN: 仙 --> 仚
  DICT.UNIHANS[393] = '\u8bcc' // ZHOU: 州 --> 诌
  DICT.UNIHANS[39] = '\u5a64' // CHOU: 抽 --> 婤
  DICT.UNIHANS[50] = '\u8160' // COU: 凑 --> 腠
  DICT.UNIHANS[369] = '\u6538' // YOU: 优 --> 攸
  DICT.UNIHANS[123] = '\u4e6f' // HU: 乎 --> 乯
  DICT.UNIHANS[171] = '\u5215' // LI: 哩 --> 刕
  DICT.UNIHANS[102] = '\u4f5d' // GOU: 勾 --> 佝
  DICT.UNIHANS[126] = '\u72bf' // HUAN: 欢 --> 犿
  DICT.UNIHANS[176] = '\u5217' // LIE: 毟 --> 列
  DICT.UNIHANS[178] = '\u5222' // LING: 伶 --> 刢
  DICT.UNIHANS[252] = '\u5a1d' // POU: 剖 --> 娝
  DICT.UNIHANS[330] = '\u5078' // TOU: 偷 --> 偸
}

export function shouldPatch (toToken) {
  if (typeof toToken !== 'function') return false
  // Special unihans that get incorrect pinyins.
  if (
    toToken('\u4f15').target === 'FOU'
    && toToken('\u4eda').target === 'XIA'
    && toToken('\u8bcc').target === 'ZHONG'
    && toToken('\u5a64').target === 'CHONG'
    && toToken('\u8160').target === 'CONG'
    && toToken('\u6538').target === 'YONG'
    && toToken('\u4e6f').target === 'HOU'
    && toToken('\u5215').target === 'LENG'
    && toToken('\u4f5d').target === 'GONG'
    && toToken('\u72bf').target === 'HUAI'
    && toToken('\u5217').target === 'LIAO'
    && toToken('\u5222').target === 'LIN'
    && toToken('\u94b6').target === 'E'
  ) {
    return true
  }
  return false
}

export default {
  patcher,
  shouldPatch
}
