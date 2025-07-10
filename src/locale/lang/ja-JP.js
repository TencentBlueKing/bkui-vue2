/*
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 *
 * Copyright (C) 2025 Tencent.  All rights reserved.
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

/**
 * @file 默认中文语言包
 *
 * Copyright © 2012-2025 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
 */

export default {
  bk: {
    lang: 'ja-JP',
    datePicker: {
      // test: '我们{vari}hello {ccc}!@#$%^&&*({})',
      selectDate: '日付を選択',
      selectTime: '時間を選択',
      clear: 'クリア',
      ok: 'OK',
      weekdays: {
        sun: '日',
        mon: '月',
        tue: '火',
        wed: '水',
        thu: '木',
        fri: '金',
        sat: '土'
      },
      hour: '時',
      min: '分',
      sec: '秒',
      toNow: '現在まで',
      now: '今'
    },
    dialog: {
      ok: 'OK',
      cancel: 'キャンセル'
    },
    exception: {
      403: '業務権限がありません',
      404: 'ページが存在しません',
      500: 'サービスメンテナンス中',
      building: '機能構築中',
      empty: 'データがありません',
      searchEmpty: '検索結果が空です',
      login: 'BlueKingにログインしてください'
    },
    form: {
      validPath: '有効なパスを設定してください'
    },
    input: {
      input: '入力してください'
    },
    imageViewer: {
      loadFailed: '申し訳ありませんが、画像の読み込みに失敗しました',
      quitTips: 'ESCでフルスクリーンを終了できます'
    },
    notify: {
      showMore: 'もっと見る'
    },
    select: {
      selectAll: 'すべて選択',
      pleaseselect: '選択してください',
      searchPlaceholder: 'キーワードを入力してください',
      dataEmpty: 'オプションがありません',
      searchEmpty: '一致するデータがありません'
    },
    sideslider: {
      title: 'タイトル'
    },
    tagInput: {
      placeholder: '入力してEnterで確定'
    },
    transfer: {
      left: '左リスト',
      total: '（合計{total}件）',
      addAll: 'すべて追加',
      emptyContent: 'データがありません',
      right: '右リスト',
      removeAll: 'すべて削除',
      emptySelected: '選択されていません',
      searchPlaceholder: '検索キーワードを入力'
    },
    tree: {
      emptyText: 'データがありません'
    },
    steps: {
      step1: 'ステップ1',
      step2: 'ステップ2',
      step3: 'ステップ3'
    },
    uploadFile: {
      drag: 'ファイルをここにドラッグするか、',
      click: 'クリックしてアップロード',
      uploadDone: 'アップロード完了',
      uploading: 'アップロード中',
      reupload: '再アップロード',
      replace: 'クリックして置換',
      uploadFailed: 'アップロード失敗',
      fileExceedMsg: '{fileName} ファイルは {size} MBを超えることはできません',
      invalidFileName: 'ファイル名が無効です',
      invalidImageFormat: 'JPG|PNG|JPEG形式の画像のみアップロード可能です',
      imageExceedMsg: '画像サイズは {imgSize} MBを超えることはできません',
      uploadLabel: 'ファイルをアップロード'
    },
    navigation: {
      headerTitle: 'カテゴリ名'
    },
    searchSelect: {
      placeholder: '入力してください',
      emptyText: 'キー値を含むフィルタクエリには値が必要です',
      condition: 'または',
      remoteEmptyText: 'データがありません',
      remoteLoadingText: '読み込み中...',
      tips: '複数のキーワードは縦棒 "|" で区切ります',
      ok: 'OK',
      cancel: 'キャンセル'
    },
    table: {
      emptyText: 'データがありません',
      sumText: '合計',
      setting: {
        title: 'テーブル設定',
        fields: {
          title: '表示フィールド設定',
          subtitle: '（最大{max}項目）',
          selectAll: 'すべて選択'
        },
        lineHeight: {
          title: 'テーブル行の高さ',
          small: '小',
          medium: '中',
          large: '大'
        },
        options: {
          ok: 'OK',
          cancel: 'キャンセル'
        }
      },
      confirm: 'OK',
      reset: 'リセット',
      all: 'すべて',
      filter: {
        placeholder: 'キーワードを入力',
        empty: '一致する項目がありません'
      }
    },
    bigTree: {
      emptyText: '検索結果がありません'
    },
    message: {
      copy: 'コピー',
      copied: 'コピー済み',
      assistant: 'アシスタント',
      details: '詳細',
      copySuccess: 'コピー成功',
      copyFailed: 'コピー失敗'
    },
    image: {
      zoomIn: '拡大',
      zoomOut: '縮小',
      rotateLeft: '左に回転',
      rotateRight: '右に回転',
      fullScreen: '画面に合わせる',
      original: '1:1に戻る'
    },
    versionDetail: {
      currentTagText: '現在のバージョン'
    },
    pagination: {
      total: '合計',
      perPage: '各ページ',
      items: '本',
      pages: 'ページ数',
      selected: '選択済'
    }
  }
}
