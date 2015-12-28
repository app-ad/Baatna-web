
<?php
error_reporting(E_ALL);
ini_set("display_errors", "1");
require_once('Http2.php');
$r = new HttpRequest("post", "http://52.76.14.6:8080/BaatnaServer/rest/newsfeed/get?start=0&count=5", array(
        "access_token" => '16653614512922692',
        "client_id" => 'bt_android_client',
        "app_type" =>'bt_android'
    ));
  if ($r->getError()) {
      echo "sorry, an error occured";
  } 
  else {

      // parse json
      $js = json_decode($r->getResponse());
      $obj=$js->{"response"};
      $obj2=$obj->{"newsFeed"};
     // echo json_encode($obj2);
//in newsfeed
      foreach ( $obj2 as $user ) {
        if($user->type == 1 )
        {
          $obj3=$user->userFirst;
        //in userfirst
          $use=$obj3->user;
        //in user
          $name=$use->user_name;
          $timeofpost=$user->timestamp;
          ?>
          <p><?php echo $name; ?> joins your neighbourhood<br>
          <?php echo $timeofpost; ?><br></p>
          <?php
        }
        else if($user->type == 2)
        {
            $obj3=$user->userFirst;
        //in userfirst
            $use=$obj3->user;
        //in user
            $name=$use->user_name;
            //in wish
            $wis=$user->wish;
            $wis2=$wis->wish;
            $titl=$wis2->title;
            $desc=$wis2->description;
            $required=$wis2->required_for;
            $time=$wis2->time_post;
            $timeofpost=$user->timestamp;
            ?>
            <p><?php echo $name; ?> wants to borrow a <?php echo $titl; ?> for <?php echo $required; ?> days
            <br> Posted on <?php echo $timeofpost; ?> </p>
            <?php
        }
        elseif ($user->type == 3) 
        {
            $obj3=$user->userFirst;
            $use=$obj3->user;
            $name=$use->user_name;

            $timeofpost=$user->timestamp;
            //in wish
            $wis=$user->wish;
            $wis2=$wis->wish;
            $titl=$wis2->title;
            $desc=$wis2->description;
            $required=$wis2->required_for;
            $time=$wis2->time_post;  

            $obj33=$user->users;
            foreach ($obj33 as $value) 
            {
            $uses=$value->user; 
            $name2=$uses->user_name;
            }
            ?>
        <p><?php echo $name2; ?> offered <?php echo $titl; ?> to <?php echo $name; ?>
        <br><?php echo $timeofpost; ?><br>
        </p> 
        <?php    
      }
    }
  }
?>
