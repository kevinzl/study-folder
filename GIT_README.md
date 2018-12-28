### git 本地命令管理配置文档1：

#### 第一步：把这个文件夹变成Git可管理的仓库；
`$ git init`

#### 第二步：
通过 $ git add .(注意这个"."，是有空格的，"."代表这个test这个文件夹下的目录全部都提交。你也可以通过git add 文件名  提交指定的文件)把文件添加到缓存区；<br/>
` $ git add .`

然后可以通过 $ git status命令，查看下现在的状态，也可以不看，随你；<br/>
`$ git status`

#### 第三步：下面就到了连接远程仓库（也就是连接Github）
 由于本地Git仓库和Github仓库之间的传输是通过SSH加密的，所以连接时需要设置一下：<br/>
 创建SSH KEY。先看一下你C盘用户目录下有没有.ssh目录，有的话看下里面有没有id_rsa和id_rsa.pub这两个文件，有就跳到下一步，没有就通过下面命令创建<br/>
 `$ ssh-keygen -t rsa -C "youremail@example.com"` <br/>
 然后一路回车。这时你就会在用户下的.ssh目录里找到id_rsa和id_rsa.pub这两个文件  <br/>

#### 第四步：登录Github,找到右上角的图标，打开点进里面的Settings，再选中里面的SSH and GPG KEYS，
 点击右上角的New SSH key，然后Title里面随便填，再把刚才id_rsa.pub里面的内容复制到Title下面的Key内容框里面，最后点击Add SSH key，
 这样就完成了SSH Key的加密。

#### 第五步：在Github上创建一个Git仓库。 你可以直接点New repository来创建；

#### 第六步：在Github上创建好Git仓库之后我们就可以和本地仓库进行关联了，根据创建好的Git仓库页面的提示，可以在本地test仓库的命令行输入：
` $ git remote add origin git@github.com:smfx1314/test2.git`

#### 第七步：关联好之后我们就可以把本地库的所有内容推送到远程仓库（也就是Github）上了，通过：
` $ git push -u origin master` <br/>
    
 由于新建的远程仓库是空的，所以要加上-u这个参数。<br/>
	
 如果新建远程仓库不是空的，例如你勾选了 Initialize this repository with a README。那么你通过命令 $ git push -u origin master是会报错的，
 这是由于你新创建的那个仓库里面的README文件不在本地仓库目录中，这时我们可以通过以下命令先将内容合并以下：<br/>

 `$ git pull --rebase origin master <br/>`
   
 再输入`$ git push origin master` <br/>
 等远程仓库里面有了内容之后，下次再从本地库上传内容的时候只需下面这样就可以了：<br/>
` $ git push origin master` <br/>
 至此就完成了将本地项目上传到Github的整个过程。<br/>


 #### 如果 error: src refspec master does not match any. 错误处理办法
 要先配置: <br/>
 `git config --global user.email "you@example.com"` <br/>
 `git config --global user.name "Your Name"` <br/>
 
 #### 参考资料：
  > `https://www.cnblogs.com/smfx1314/p/8426115.html` <br/>
  > `https://www.cnblogs.com/jeremylee/p/5715289.html` <br/>

