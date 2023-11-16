/* eslint-disable */
export const instructionsList = [
  {
    id: 1,
    title: 'Введение в Git',
    content:
      '<h2>Что такое Git?</h2> <p> <strong> Git — это система контроля версий (Control Version System,&nbsp; <em>CVS</em>) </strong> </p> <p> Если целая команда работает над одним проектом, неизбежна ситуация, когда несколько человек могут изменять один файл одновременно. Без CVS нормально разрабатывать проект в команде очень сложно: будет много конфликтов, которые приводят к риску потери части изменений в коде. </p> <p> Например, вы поменяли в файле index.html заголовок, а коллега одновременно с этим изменил тексты. И при этом изменений коллеги у вас нет, а у коллеги нет ваших изменений. Как быть? Вероятно, кому-то из вас, например вам, придется взять файл коллеги и внести туда свои изменения. А если изменений очень много? В общем, это будет настоящая головная боль, а в большой команде эта головная боль будет у всех. </p> <p> В общем, чтобы решить такие проблемы, и были придуманы системы контроля версий. А ситуация, когда есть две версии одного файла и нужно их как-то «слить», называется <em>конфликтом</em>. </p> <h2>Как работают CVS?</h2> <p> Принцип работы Git простой: вы вносите какие-то изменения в файлы. Затем CVS позволяет их зафиксировать (в виде так называемого&nbsp; <strong> <em>коммита</em> </strong> ): ваши изменения сохраняются, и к ним всегда можно вернуться. </p> <p> На самом деле существует доволно много тонкостей и команд для работы с Git, но для вас (я апеллирую к специлистам ручного тестирования&nbsp; <strong>Aston</strong>)&nbsp;<em>хорошая новость</em>&nbsp; в том, что&nbsp; <strong>вам не нужно вообще их использовать</strong>, т.к. не предполагается, что вы будете вносить какие-либо правки в сам код. </p> <p> Вам уже должны быть предоставлены&nbsp; <strong> ссылки и доступ к <em>репозиториям</em> </strong> &nbsp; (так называются рабочие папки проектов в системах Git) вашего проекта. Если что пинайте своих <strong>DevOps&apos;a и ПМа</strong>. </p> <p> Таким образом, половина приведенных здесь инструкций тебе на текущий момент не нужна (а если ты уже ежедневно вводишь в своем терминале: </p> <pre class="codeBlock"> <code>npm run start</code> </pre> <p> ...то тебе вообще едва ли нужны эти инструкции, если только ты не сел за новый ПК и пытаешься вспомнить как снова ставить эти чертовы SSH-ключи). </p> <p> Однако, тебе будет в будущем намного проще работать, если сможешь пользоваться хотя бы командами &apos;&nbsp;<strong>git checkout</strong> &apos; и &apos;&nbsp;<strong>git pull</strong>&apos; чтобы не скачивать постоянно себе тестируемую ветку вручную из репозитория проекта. </p> <p> Так что все-таки полезно знать, что существуют разные Git системы (самые популярные - GitLab и GitHub) и как с ними работать. Разработка в &nbsp;<strong>Aston</strong> ведется в&nbsp;<strong>GitLab</strong>. </p>',
    published: true,
    author: 'Kamajor',
    authorId: 0,
  },
  {
    id: 2,
    title: 'Установка GIT для Windows',
    content:
      '<p> <strong>1.</strong> Переходим на&nbsp; <a href="https://git-scm.com/downloads" target="_blank" rel="noopener" > страницу Git </a> . На ней в списке выбора операционных систем жмем на&nbsp; <strong>Windows</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/538848dc-1d12-11ec-aa2f-0242ac170004" alt="Git_Win_1" width="514" height="457" /> </p> <p> Автоматически запустится скачивание файла-установщика Git, дождемся его загрузки. </p> <p> <strong>2.</strong> Теперь установим Git. Запускаем скачавшийся файл, будет первое окно с информацией о Git, жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/4681b768-1d12-11ec-bc66-0242ac170003" alt="Git_Win_2" width="517" height="409" /> </p> <p> Нас попросят выбрать место, куда сделать установку. Выбираем по умолчанию, жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/635be066-1d12-11ec-b441-0242ac170004" alt="Git_Win_3" width="515" height="409" /> </p> <p> Далее будет список настроек, которые будут установлены вместе с Git. Оставим их все, так как они нужны, и жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/7af8f286-1d12-11ec-ab96-0242ac160003" alt="Git_Win_4" width="514" height="406" /> </p> <p> В следующем окне попросят выбрать папку для меню быстрого доступа, оставляем как есть, жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/a2c1ccc0-1d12-11ec-a66f-0242ac160003" alt="Git_Win_5" width="512" height="409" /> </p> <p> Далее нам предлагают выбрать текстовый редактор по умолчанию. Можно оставить выбор по дефолту (<strong>Vim</strong>), но, если вы умеете работать с каким-то другим и вам с ним удобнее, можете выбрать другой. После выбора жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/b49cb9b4-1d12-11ec-aba7-0242ac160003" alt="Git_Win_6" width="519" height="409" /> </p> <p> Далее можно задать название главной ветки Git, предлагаем использовать значение по умолчанию, так что жмем <strong>Next</strong>: </p> <h3> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/d6ec1af0-1d12-11ec-9268-0242ac160002" alt="Git_Win_7" width="515" height="409" /> </h3> <p> В следующем меню предлагаем выбрать третий пункт вместо первого: это поможет использовать все инструменты Git. После выбора жмем&nbsp; <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/efe5fa30-1d12-11ec-b5c3-0242ac170004" alt="Git_Win_8" width="517" height="408" /> </p> <p> Далее предлагают выбрать дополнительный <strong>OpenSSH </strong>и <strong> OpenSSL</strong>, можно оставить все как есть и нажать&nbsp; <strong>Next</strong>: </p> <p> <strong> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/302b1c10-1d13-11ec-ad28-0242ac160003" alt="Git_Win_9" width="518" height="412" /> </strong> </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/6c0a7cac-1d14-11ec-90f1-0242ac160003" alt="Git_Win_10" width="514" height="405" /> </p> <p> В следующем окне предлагаем выбрать второй пункт. Это поможет избежать проблем в будущем при работе в проектах совместно с другими людьми, у которых Unix-системы. После выбора жмем<strong> Next:</strong> </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/b735991e-1d14-11ec-b21b-0242ac170003" alt="Git_Win_11" width="513" height="404" /> </p> <p> Далее оставляем все как есть, жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/ce3c1700-1d14-11ec-9915-0242ac170003" alt="Git_Win_12" width="513" height="409" /> </p> <p> Далее тоже рекомендуем ничего не менять, жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/e590243c-1d14-11ec-9b06-0242ac160002" alt="Git_Win_13" width="513" height="409" /> </p> <p> Последним шагом нам предложат настроить разные дополнительные опции. Здесь можно ничего не менять, жмем <strong>Next</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/f2c5f258-1d14-11ec-b2cb-0242ac170003" alt="Git_Win_14" width="513" height="409" /> </p> <p> В последних шагах нам предложат настроить разные дополнительные опции. Здесь можно ничего не менять и жать <strong>Next </strong>и <strong> Install</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/6d6b882e-1d15-11ec-9ea7-0242ac160002" alt="Git_Win_15" width="514" height="411" /> </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/adda584a-1d15-11ec-928c-0242ac170003" alt="Git_Win_16" width="514" height="406" /> </p> <p> После этого начнется установка, после установки увидим завершающее окно, снимем галку с <strong>View Release Notes</strong> и поставим в&nbsp; <strong>Launch Git Bash</strong>, чтобы опробовать Git и проверить, что все хорошо. После выбора жмем <strong>Finish</strong>: </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/c26dc60c-1d15-11ec-b5e7-0242ac170004" alt="Git_Win_17" width="513" height="406" /> </p> <p> После этого запустится программа <strong>Git Bash</strong>, терминал для работы с Git, куда можно вводить разнообразные команды, которые Git поддерживает.&nbsp; </p> <p>Введем первую команду:</p> <pre class="codeBlock"> <code>git --version</code> </pre> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/f767b58e-1d15-11ec-86ce-0242ac170004" alt="Git_Win_18" width="598" height="385" /> </p> <p> Если все хорошо, то появится версия программы Git. Отлично, установка завершена. </p>',
    published: true,
    author: 'Kamajor',
    authorId: 0,
  },

  {
    id: 3,
    title: 'Установка GIT для MacOS',
    content:
      '<p> <strong>1.</strong> Git под MacOS удобно установить с помощью&nbsp; <strong>brew.</strong> Для этого открываем терминал. Чтобы его открыть, можно нажать<strong> Command + Space</strong> (пробел), далее в поиске нужно ввести <strong>Terminal</strong> и нажать <strong>Enter</strong>. </p> <p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/782581a0-0caa-11ec-8b86-0242ac160003" alt="GIT_MacOS_1" width="500" height="76" /> </p> <p> Запустится программа <strong>Terminal</strong>. Теперь установим&nbsp; <strong>Homebrew</strong> — специальную программу, которая умеет устанавливать нужные программы для терминала. <strong>Homebrew</strong>&nbsp; очень популярна среди разработчиков, пользующихся MacOS. </p> <p>Введем команду:</p> <pre class="codeBlock"> <code> /bin/bash -c&nbsp; <span> <span> <span>&quot;</span> </span> <span> <span> <span> <span> <span> $(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh) </span> </span> </span> </span> </span> <span> <span>&quot;</span> </span> </span> </code> </pre> <p> После выполнения этой команды установится <strong>brew</strong>. </p> <p> <strong>2.</strong> Теперь можно установить Git, выполнив команду: </p> <pre class="codeBlock"> <code>brew install git</code> </pre> <p> После успешного завершения команды осталось лишь проверить, что Git установился: </p> <pre class="codeBlock"> <code>git --version</code> </pre> <p> Если все хорошо, то появится версия программы Git. Отлично, установка завершена. </p>',
    published: true,
    author: 'Kamajor',
    authorId: 0,
  },
  {
    id: 4,
    title: 'Установка SSH-ключей',
    content:
      '<p>Итак, Git установлен, доступ к проекту на GitLab получен (<em>еще раз</em> - пинаем ПМ&apos;а, хотя обычно доступ будет по твоей рабочей почте и паролю от рабочей учетки). </p> <p> Далее для работы с GitHub через свой компьютер нужно еще добавить&nbsp; <strong>SSH-ключ</strong>. </p> <p> Чтобы уметь отправлять команды на GitHub со своего локального компьютера, надо пройти авторизацию у сервера. Это как при использовании некоторых сайтов надо сначала войти, введя логин и пароль. GitHub для этого использует <strong>SSH-ключи</strong>. </p><p> <em> * Доступ по логину и паролю также имеется, для чего репозиторий при дальнейшем клонировании копируется по https-ссылке (и это, как правило, намного проще чем возня с ключами, но почему-то не у всех нормально настроен такой доступ - если что пинаем DevOps&apos;а) </em> </p> <p> <strong>SSH-ключи</strong> состоят из открытого (публичного) ключа и закрытого (приватного) ключа. Открытый ключ — это как логин. Он отправляется на сервер, его можно не прятать ни от кого. Закрытый ключ же, наоборот, нельзя никому показывать, он как пароль. При авторизации вы отправляете только свой публичный ключ. Сервер присылает вам секретное сообщение, которое понять можете только вы, и таким образом происходит авторизация.&nbsp; </p> <p> По сравнению с логином и паролем это безопаснее, так как при авторизации и логин, и пароль вы отправляете на сервер, а тут только публичный ключ.&nbsp; </p> <p> <strong>1. </strong>Итак, для генерации ключей нам нужен терминал <strong>. </strong>Откройте свой терминал (<strong>Terminal</strong> для MacOs или <strong>Git Bash</strong> для Windows) </p> <p><em> * а если уже поставили себе <strong>Visual Studio Code</strong>, то нажимаем в нем&nbsp; <em>&apos;ctrl + ~&apos;</em>&nbsp; и познаем вселенское счастье, с комфортом работая там и переключаясь между нужными оболочками терминала&nbsp; </em> </p> <p> Далее, чтобы сгенерировать ключи, нужно запустить команду (вводим ее в терминал): </p> <pre class="codeBlock"> <code> ssh-keygen -t rsa -b 4096 -C <span>&quot;your_mail@example.com&quot;</span> </code> </pre> <p>можно использовать разные кодировки, например также можно ввести:</p> <a href="https://timeweb.com/media/articles/0001/05/3ac26d3c8dceb2aa92f49cd41c3016f93e39bac2.png" target="_blank" rel="noopener noreferrer" > <Image src="https://timeweb.com/media/articles/0001/05/3ac26d3c8dceb2aa92f49cd41c3016f93e39bac2.png" alt="Установка_SSH_0" width="500" height="172" /> </a> <p> В конце нужно указать свою почту (рабочую или, если регистрировались сами, то которую вы вводили при регистрации на GitLab/GitHub). </p> <p> Вводим команду в терминале, жмем <strong>Enter</strong>. После этого вас попросят ввести имя файла, куда сохранить ключ. Можно ничего не вводить и нажать <strong>Enter</strong>: </p> <a href="https://cs.sberuniversity.online/image/full/full/resize/e957cb22-0cae-11ec-a8ff-0242ac160003" target="_blank" rel="noopener noreferrer" > <Image src="https://cs.sberuniversity.online/image/full/full/resize/e957cb22-0cae-11ec-a8ff-0242ac160003" alt="Установка_SSH_1" width="500" height="172" /> </a> <p> Затем вас попросят ввести пароль для <strong>SSH-ключа</strong>. Его тоже можно не вводить и нажать <strong>Enter</strong>: </p> <a href="https://cs.sberuniversity.online/image/full/full/resize/023ab046-0caf-11ec-87bc-0242ac170004" target="_blank" rel="noopener noreferrer" > <Image src="https://cs.sberuniversity.online/image/full/full/resize/023ab046-0caf-11ec-87bc-0242ac170004" alt="" width="500" height="172" /> </a> <p> Пароль попросят повторить, снова жмем<strong> Enter</strong>. </p> <p> После этого <strong>SSH-ключ</strong> успешно сгенерируется: </p> <a href="https://cs.sberuniversity.online/image/full/full/resize/2eeefbb0-0caf-11ec-80ae-0242ac170004" target="_blank" rel="noopener noreferrer" > <Image src="https://cs.sberuniversity.online/image/full/full/resize/2eeefbb0-0caf-11ec-80ae-0242ac170004" alt="" width="500" height="172" /> </a> <p> Осталось ввести еще одну команду, чтобы он начал использоваться системой: </p> <pre class="codeBlock"> <code>ssh-add ~/.ssh/id_rsa</code> </pre> <p> Если вы указывали другое имя для ключа, то нужно ввести его. Если при генерации ничего не вводили, то вам подойдет команда выше. </p> <p>После ввода команды выведется информация о том, что он добавился:</p> <pre class="codeBlock"> <code> Identity added: /Users/green-corp/.ssh/id_rsa (green-corp@yandex.ru) </code> </pre> <p> <strong>2. </strong>Итак, мы сгенерировали ключ. Теперь надо вывести его публичную часть, это можно сделать командой: </p> <pre class="codeBlock"> <code>cat ~/.ssh/id_rsa.pub</code> </pre> <p> Команда <strong>cat</strong> выводит содержимое файла, путь к которому указывается далее. Если вы не задавали никакого названия для своего&nbsp; <strong>SSH-ключа</strong>, то вам подойдет та же самая команда. </p> <p>Она выведет значение публичного ключа:&nbsp;</p> <a href="https://cs.sberuniversity.online/image/full/full/resize/7f0abffc-0cb0-11ec-9341-0242ac170004" target="_blank" rel="noopener noreferrer" > <Image src="https://cs.sberuniversity.online/image/full/full/resize/7f0abffc-0cb0-11ec-9341-0242ac170004" alt="" width="500" height="172" /> </a> <p> Этот ключ хранится у вас локально на вашем компьютере, так что можете и просто найти его в соответствующей папке и открыть руками (тем же самым блокнотом), где вы увидите то же самое содержимое </p> <p> Нужно выделить строку, начинающуюся с <strong>ssh-rsa</strong> и скопировать ее всю. </p> <p> Этот ключ теперь необходимо добавить в нашу используемую Git-систему (по-умолчанию, GitLab, но также будет приведена инструкция и для GitHub&apos;а) </p>',
    published: true,
    author: 'Kamajor',
    authorId: 0,
  },
  {
    id: 5,
    title: 'Добавление SSH-ключей в GitHub',
    content:
      '<p> Теперь нам необходимо полученный ранее SSH ключ загрузить на GitHub (если проект размещен на нем). </p> <p> Для этого переходим на&nbsp;<em> <a href="https://github.com/settings/keys" target="_blank" rel="noopener" > страницу работы с ключами </a> </em>. На ней нажимаем кнопку <strong>New SSH key</strong>:&nbsp; </p> <a href="https://cs.sberuniversity.online/image/full/full/resize/d67976e2-0cb1-11ec-9c6d-0242ac170003" target="_blank" rel="noopener noreferrer"> <Image src="https://cs.sberuniversity.online/image/full/full/resize/d67976e2-0cb1-11ec-9c6d-0242ac170003" alt="Добавление_SSH_GitHub_1" width="544" height="444" /> </a> <p> Открывается два поля. В поле <strong>Title</strong> вводим название для ключа, можно назвать его так, как компьютер, на котором мы его генерировали. В поле <strong>Key</strong> нужно вставить ранее скопированный ключ: </p> <a href="https://cs.sberuniversity.online/image/full/full/resize/061864ee-0cb2-11ec-b008-0242ac170003" target="_blank" rel="noopener noreferrer"> <Image src="https://cs.sberuniversity.online/image/full/full/resize/061864ee-0cb2-11ec-b008-0242ac170003" alt="Добавление_SSH_GitHub_2" width="544" height="444" /> </a> <p> Далее жмем <strong>Add SSH key</strong>. Могут попросить ввести пароль, вводим его. Если все сделано правильно, то в списке&nbsp; <strong>SSH keys</strong> появится новый <strong>SSH-ключ</strong>: </p> <a href="https://cs.sberuniversity.online/image/full/full/resize/3b5eb23e-0cb2-11ec-862a-0242ac170003" target="_blank" rel="noopener noreferrer"> <Image src="https://cs.sberuniversity.online/image/full/full/resize/3b5eb23e-0cb2-11ec-862a-0242ac170003" alt="Добавление_SSH_GitHub_3" width="544" height="444" /> </a>',
    published: true,
    author: 'Kamajor',
    authorId: 0,
  },
  {
    id: 6,
    title: 'Добавление SSH-ключей в GitLab',
    content:
      '<p> Если проект размещен на GitLab (что вероятнее), то полученный ранее SSH ключ загружаем туда (все доступные внутренние проекты можно найти на: <em> <a href="https://git.astondevs.ru/aston" target="_blank" rel="noopener" > Aston </a> </em> ). </p> <p> В общем случае необходимо перейти в настройки в раздел <strong>SSH-keys</strong>, где вставляем ключ в специально отведенное для этого поле и нажимаем на кнопку&nbsp;<strong>Add key</strong>. </p> <a href="https://timeweb.com/media/articles/0001/05/7d6b372a5ffb6793477d4ddc6b9ccc8af9443c7a.png" target="_blank" rel="noopener noreferrer" > <Image src="https://timeweb.com/media/articles/0001/05/7d6b372a5ffb6793477d4ddc6b9ccc8af9443c7a.png" alt="Добавление_SSH_GitHub_1" width="615" height="324" /> </a> <p> Но поскольку настройки и визуализация интерфейса GitLab могут отличаться на проектах, то добавлять ключ может быть проще (<em>...нет</em>) с помощью команд. </p> <p> Для этого вот ссылка на соответствующий раздел официальной документации GitLab: &nbsp; <em> <a href="https://docs.gitlab.com/ee/user/ssh.html#add-an-ssh-key-to-your-gitlab-account" target="_blank" rel="noopener" > Добавление SSH-ключа к вашему аккаунту </a> </em> </p> <p> Также, зная как порой приходится танцевать с бубном при установке SSH-ключей, оставляю список ссылок на официальную документацию GitLab и GitHub (поскольку это работа с Git как таковым, то инструкции покрывают один и тот же функционал и взаимно хорошо друг друга дополняют): </p> <ol> <li> <em> <a href="https://docs.gitlab.com/ee/user/ssh.html" target="_blank" rel="noopener" > Использование SSH для обмена с GitLab (<em>english</em>) </a> </em> </li> <li> <em> <a href="https://docs.github.com/ru/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" target="_blank" rel="noopener" > Создание нового ключа SSH и его добавление в ssh-agent </a> </em> </li> <li> <em> <a href="https://docs.github.com/ru/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account" target="_blank" rel="noopener" > Добавление нового ключа SSH в учетную запись GitHub </a> </em> </li> </ol>',
    published: true,
    author: 'Kamajor',
    authorId: 0,
  },
  {
    id: 7,
    title: 'Установка Node.js + NPM',
    content:
      '<p> Чтобы запустить проект, который написан на React (это JavaScript библиотека, на которой и пишет наша фронтенд команда) нужно еще некоторое окружение. А именно&nbsp;<strong>Node.js</strong>. </p> <p> <strong>Node.js</strong>&nbsp;- это среда выполнения кода JavaScript. </p> <p> Кроме этого, при установке Node.js устанавливается и&nbsp; <strong>NPM</strong>&nbsp;-&nbsp;<em>Node Package Manager</em>, т.е. менеджер пакетов, входящий в состав Node.js. Именно с помощью NPM вы будете устанавливать необходимые зависимости (пакеты) проекта </p> <p> Если в дальнейшем потребуется поставить какой-то отдельный/дополнительный пакет, то это делается командой: </p> <pre class="codeBlock"> <code>npm install &lt;packagename&gt;</code> </pre> <p> Перед тем как что-то устанавливать стоит запустить снова свой терминал (для MacOS - <strong>Terminal</strong>, а для Windows - или уже установленный нами&nbsp;<strong>Git Bash</strong>, или же предустановленный <strong>Powershell</strong>) </p> <p> И в терминале необходимо ввести команду</p> <pre class="codeBlock"> <code>node --version</code> </pre> <p> Это команда позволит проверить, нет ли уже в вашей системе ранее установленной версии Node.js. Если платформа уже установлена, то отобразится его версия: </p> <Image src="https://nodejsdev.ru/guides/webdraftt/setup-2.png" alt="Git_Win_1" width="608" height="60" /> <p> <strong>Важно</strong>, чтобы версия установленного Node.js была не ниже&nbsp; <strong>14.0.0+</strong> </p> <p> Это ограничение библиотеки React для корректной работы. В том числе данное ограничение означает, что проект <strong>не получится запустить</strong> на Windows 7 (ну и, разумеется, ниже...&nbsp; <em> и для справки отмечу, что есть под семерку все-таки один заковыристый танец с бубном, но даже он будет работать весьма условно и ограниченно </em> ). </p> <p> Если вы не видите версии Node.js, то его необходимо установить. Для чего переходим на сайт: <em> <a href="https://nodejs.org/en" target="_blank" rel="noopener"> nodejs.org </a> </em> . </p> <p> И сразу на главной странице из двух предлагаемых вариантов выбираем рекомендуемую (<strong>LTS</strong>) версию под свою ОС и устанавливаем ее. Процесс установки стандартный, так что справишься без дополнительных подсказок. Я верю в тебя! </p> <p>После установки снова вводим в терминал команду для проверки версии</p> <pre class="codeBlock"> <code>node --version</code> </pre> <p> Также для проверки того, что вместе с Node.js корректно установился и NPM можно ввести команду </p> <pre class="codeBlock"> <code>npm --version</code> </pre> <p>Если видишь результат, значит ты молодец!</p>',
    published: true,
    author: 'Kamajor',
    authorId: 0,
  },
  {
    id: 8,
    title: 'Установка Visual Studio Code',
    content:
      '<p> Наконец необходимо установить среду разработки (редактор) <strong>Visual Studio Code</strong>. </p> <p> Visual Studio Code (он же&nbsp;<em>VSCode</em>) - это интегрированная среда разработки (<strong>IDE</strong>), то есть очень продвинутый блокнот (<em>ну... все-таки редактор кода</em>), у которого есть подсветка для кода, автодополнения и много разных плагинов, утилит и сервисов, которые упрощают жизнь разработчику, включая наш уже любимый терминал, а главное - возможность запуска локального сервера, на котором мы наконец и сможем запустить, посмотреть и пощупать наш драгоценный проект. </p> <p> <strong>1.</strong>&nbsp;Сначала надо скачать установщик с официального сайта: <em> <a href="https://code.visualstudio.com/Download" target="_blank" rel="noopener" > VSCode </a> . </em> </p> <p> Выбираем пакет, подходящий для своей операционной системы и скачиваем. </p> <p> <strong>2.</strong>&nbsp;После окончания загрузки файла запускаем его </p> <p> Если у вас <strong>MacOS</strong>, то загруженный файл — это архив: </p> <Image src="https://cs.sberuniversity.online/image/1000/auto/upsize/005fb750-040b-11ec-af8c-0242ac170003" alt="VSCode_1" width="128" height="139" /> <p> После нажатия на него дважды он разархивируется, и появится файл. Этот файл необходимо перенести в <strong>Программы</strong>. </p> <p> Если у вас <strong>Windows</strong>, то после запуска всплывет окно предупреждения системы безопасности, нажимаем <strong>Запустить</strong> : </p> <Image src="https://cs.sberuniversity.online/image/1080/auto/fit/b946717e-040a-11ec-a28e-0242ac170004" alt="VSCode_2" width="500" height="383" /> <p> После этого начнется установка <strong>VSCode</strong>, нажимаем <strong>Далее</strong>: </p> <Image src="https://cs.sberuniversity.online/image/1080/auto/fit/9dd16952-040b-11ec-a366-0242ac170004" alt="VSCode_3" width="500" height="387" /> <p> Далее необходимо выбрать папку установки, можете оставить по умолчанию или поменяйте, если хотите, и нажимаем <strong>Далее</strong>. </p> <p> Откроется меню <strong>Выбрать папку </strong>в меню <strong> Пуск</strong>. Рекомендуется оставить по умолчанию и нажать <strong>Далее</strong>. </p> <p> Откроется меню дополнительных задач. По умолчанию стоит&nbsp; <strong>Добавить в PATH</strong>, советуется не снимать галку с нее. Дополнительные условия можете выбрать по вашему усмотрению, например, ярлык на рабочем столе может быть полезен для быстрого запуска программы. </p> <p> Затем осталось нажать <strong>Установить</strong> и дождаться окончания установки. В конце будет стоять галка на <strong>Запустить Visual Studio Code</strong>, можете ее не снимать и нажать <strong>Завершить</strong>. </p>',
    published: true,
    author: 'Kamajor',
    authorId: 0,
  },
  {
    id: 9,
    title: 'Клонирование Git-репозитория',
    content:
      'Итак, среда исполнения кода и его отображения у нас настроена. Теперь нужно получить сам код из рабочего репозитория на сервере. Для этого существует несколько различных способов. </p> <p> Самым простым способом поначалу может быть просто скачать его как архив. Картинок не подвезли, но для этого надо зайти просто в сам репозиторий (адрес спросите у той команды, чей проект вам поручили протестировать) и... </p> <p> - в <strong>GitHub</strong> в раскрывающемся меню под большой зеленой кнопкой &apos;&lt;&gt;Code &#9660;&apos; просто жми на строчку &apos;Download ZIP&apos; </p> <p> - в <strong>GitLab</strong> просто найди кнопку с иконкой в виде стрелки вниз, как для обычного скачивания файлов (вроде: &#10515;) </p> <p> Полученный таким образом архив с репозиторием, тебе надо просто распаковать в любой удобной тебе директории и перейти для его просмотра из VSCode через строку контекстного меню: &apos;File &#10132; Open folder ...&apos; или же просто с помощью комбинации клавиш &apos;CTRL+K&apos; </p> <p> Тем не менее, чтобы поддерживать актуальность того, кода который ты просматриваешь и проверяешь, тебе придется постоянно скачивать этот репозиторий заново (ведь разработчки будут менять этот код в соответствии с твоими замечаниями), либо все-таки приноровиться к терминалу и клонировать репозиторий через него (или же через UI-интерфейс VSCode - но куда и как тыкать лучше посмотри в доке Microsoft по ссылке в конце этой статьи). </p> <p> <strong>Клонирование </strong> - это получение копии существующего Git-репозитория. Как правило, с помощью команды &apos;git clone&apos;. </p> <p> Соответственно для этого необходимо ввести в терминале (опять же делаем все это уже из VSCode, где для открытия терминала либо используем контекстное меню: &apos;Terminal &#10132; New Terminal&apos;, либо нажимаем комбинацию клавиш &apos;CTRL+~&apos; ) </p> <pre class="codeBlock"> <code> git clone &lt;ссылка на репозиторий&gt; &lt;путь к директории&gt; </code> </pre> <p> Введя данную команду, мы просим Git создать копию репозитория, который находится по ссылке (&lt;ссылка на репозиторий&gt;), и можем указать путь к директории, в которую Git скопирует репозиторий (&lt;директория&gt;). Если его не указать, директория создастся в каталоге, где вы находитесь, когда выполняете команду и будет называться так же, как и сам репозиторий. </p> <p> Чтобы не вводить ссылку на репозиторий вручную мы можем её скопировать как раз-таки из самого репозитория, где в раскрывающемся меню под синей кнопкой (для GitLab) &apos;Clone &#709;&apos; копируем содержимое строчки &apos;<strong>Clone with SSH</strong>&apos;. </p> <Image src="https://losst.pro/wp-content/uploads/2019/07/Snimok-ekrana-ot-2019-07-14-18-53-12.png" alt="GitClone_1" width="539" height="303" /> <p> Соответственно суммируя: открываем в VSCode ту папку, в которой хотим работать, нажимаем &apos;CTRL+~&apos; и в открывшемся терминале вводим &apos;git clone &lt;скопированная ссылка&gt;&apos; </p> <p> Дополнительные / альтернативные / более развернутые инструкции можно найти по ссылкам: </p> <ol> <li> <em> <a href="https://git-scm.com/book/ru/v2/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git-%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-Git-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F#r_git_cloning" target="_blank" rel="noopener" > Клонирование существующего репозитория </a> </em> <p>- официальная документация Git</p> </li> <li> <em> <a href="https://learn.microsoft.com/ru-ru/azure/developer/javascript/how-to/with-visual-studio-code/clone-github-repository?tabs=create-repo-command-palette%2Cinitialize-repo-activity-bar%2Ccreate-branch-command-palette%2Ccommit-changes-command-palette%2Cpush-command-palette" target="_blank" rel="noopener" > Клонирование и использование репозитория GitHub в Visual Studio Code </a> </em> <p> - документация Microsoft - разработчика VSCode - c разными способами клонирования и управления репозиторием как через интегрированный терминал, так и через UI (тыканьем мышкой по кнопочкам - палитре команд - что может быть намного проще новичкам) </p> </li> </ol>',
    published: true,
    author: 'Kamajor',
    authorId: 0,
  },
];
