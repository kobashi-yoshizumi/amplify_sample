フロントエンドにはReactを持ちたプログラムを作成する。
WEB公開にはamplify publishを利用する
バックエンドには COGNITO+AppSYnc+Dynamoを用いてユーザ認証とデータ管理を行う


GITHUBを使用してソースコードを管理する。AWSとはGIT同期を用いて環境を構築する

フォルダ構成は以下になる。

amplify_sample　　プロジェクトフォルダ
  -amplifyapp フォルダ   Recatクライアントプログラム
  -cf_tempフォルダ　　　　AWS環境
     - amplify.yaml    amplify　publish設定
     - cognito.yaml    COGNITO設定
     - appsync.yaml    Appsyncの設定


サンプルプログラムは　COGINTOでユーザ認証し、認証OKなユーザの場合は
appsyncを使ってDynamoからレコードの中身を取得し表示するサンプル


GITHUB ACTIONSは使用しない
CODEPIPELINEは使用しない（LAMBDAでは利用可能　ただし　CODE BUILDは使わない）
EC2などを使ってAWSコマンドを手動で打ち込むのも禁止

環境構築に関してはGIT同期のみで環境を構築。GITHUB上のブランチにソースがコミットされたら自動展開
Amplifyのソースに関しては、Amlify publishの機能を利用してソースを展開する




