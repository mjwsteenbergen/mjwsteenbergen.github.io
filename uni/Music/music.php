<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
 "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Music Viewer</title>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<link href="http://www.st.ewi.tudelft.nl/~hidders/wdbt/pract/wk3-1/viewer.css" type="text/css" rel="stylesheet" />
	</head>

	<body>
		<div id="header">

			<h1>190M Music Playlist Viewer</h1>
			<h2>Search Through Your Playlists and Music</h2>
		</div>
		<div id="listarea">
			<ul id="musiclist">
		<?php 
			//$dir = "D:\wamp\www\songs";
			//$dh  = opendir($dir);
			//print $dh;
			$files = glob("songs/*.mp3");
			$txtfiles = glob("songs/*.txt");
			function formatsize($bytes){
				if($bytes >= 1048576){
					$bytes = number_format($bytes/1048576, 2) . ' MB';
				}
				elseif ($bytes >= 1024){
					$bytes = number_format($bytes / 1024, 2) . ' KB';
				}
				else {
					$bytes = number_format($bytes) . ' B';
				}
			return $bytes;
			}

			if(isset($_REQUEST["playlist"])){
				$list = $_REQUEST["playlist"];
				showlist($list);
			}
			else{
			foreach($files as $filename){ ?>
				<li class = "mp3item">
					<a href="<?=$filename ?>"><?=basename($filename) ?><? filesize($filename) ?> </a> (<?php echo formatsize(filesize($filename)); ?>)	
			<?php } 
			foreach($txtfiles as $txtfilename){ ?>
				<li class = "playlistitem">
					<a href="http://localhost/uni/Music/music.php?playlist=<?=basename($txtfilename) ?>"><?=basename($txtfilename) ?></a> (<?php echo formatsize(filesize($txtfilename)); ?>)
			<?php } }			
		?></ul>
		</div>

		<?php 

		function showList ($list) {
			$content = file("songs/".$list);
			if(isset($_REQUEST["shuffle"])) {
				if ($_REQUEST["shuffle"] == "on") {
					shuffle($content);
				}
			}
			
			foreach($content as $txtfilename){ ?>
				<li class = "playlistitem">
					<a href="<?php echo "songs/".$txtfilename ?>"><?php echo basename($txtfilename) ?><?php filesize("songs/".trim($txtfilename)) ?> </a> (<?php echo formatsize(filesize("songs/".trim($txtfilename))); ?>)
		<?php } } ?>
		
<!--		<div id="listarea">
			<ul id="musiclist">
				<li class="mp3item">
					<a href="songs/Be More.mp3">Be More.mp3</a>
					(5438375 b)
				</li>

				<li class="mp3item">
					<a href="songs/Drift Away.mp3">Drift Away.mp3</a>
					(5724612 b)
				</li>

				<li class="mp3item">
					<a href="songs/Hello.mp3">Hello.mp3</a>

					(1871110 b)
				</li>

				<li class="mp3item">
					<a href="songs/Panda Sneeze.mp3">Panda Sneeze.mp3</a>
					(58 b)
				</li>

				<li class="playlistitem">
					<a href="music.php?playlist=mypicks.txt">mypicks.txt</a>
				</li>

				<li class="playlistitem">
					<a href="music.php?playlist=playlist.txt">playlist.txt</a>
				</li>
			</ul>
		</div> -->
	</body> 
</html>
