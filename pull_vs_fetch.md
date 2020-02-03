## pull vs fetch

![pull_vs_fetch](https://github.com/KJoobin/TID/blob/master/pull_vs_fetch.png?raw=true)

|          | pull | fetch |
| -------- | :--: | :---: |
| 다운로드 |  O   |   O   |
| 병합     |  O   |   X   |

### fetch 는 좀더 신중할때 사용

- git diff HEAD pair master // HEAD 와 fetch 한 파일의 차이를 알수있다.
- git merge pair master // fetch 한 파일을 병합한다 ( pull 과 같은기능 )