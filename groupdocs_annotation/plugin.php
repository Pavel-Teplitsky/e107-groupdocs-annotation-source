<?php

include_lan(e_PLUGIN."groupdocs_annotation/languages/groupdocs_annotation_".e_LANGUAGE.".php");

// Plugin info
$eplug_name = "GroupDocs Annotation";
$eplug_version = "1.0";
$eplug_author = "GroupDocs Team";
$eplug_url = "http://www.groupdocs.com";
$eplug_email = "support@groupdocs.com";
$eplug_description = GDALAN_01;
$eplug_compatible = "e107v0.7+";
$eplug_readme = "readme.txt";
$eplug_compliant = TRUE;
$eplug_link = FALSE;
$eplug_done = GDALAN_03;
$eplug_upgrade_done = GDALAN_04;

// Plugin directories
$eplug_folder = "groupdocs_annotation";
$eplug_icon = $eplug_folder."/images/icon_32.png";
$eplug_icon_small = $eplug_folder."/images/icon_16.png";

// Plugin config file
//$eplug_conffile = "admin_config.php";
$eplug_caption = GDALAN_02;

// List of preferences
$eplug_prefs = array(
'groupdocs_annotation_version' => $eplug_version 
);

// Plugin Update
if(!function_exists("groupdocs_annotation_upgrade")){
    function groupdocs_annotation_upgrade(){
        $upgrade_add_prefs = array(
        'groupdocs_annotation_version' => $eplug_version 
        );	
    }
}
// Plugin Install
if (($pref['plug_installed']['groupdocs_annotation'])  == "1.0") {
    $upgrade_add_prefs = array(
    'groupdocs_annotation_version' => $eplug_version 
    );		
    $eplug_upgrade_done = GDALAN_03 . $eplug_version;
}
// Plugin Remove
if(!function_exists("groupdocs_annotation_uninstall")){
    function groupdocs_annotation_uninstall()	{
        $upgrade_remove_prefs = array(
        'groupdocs_annotation_version' ,
        );	
    }
}
// Plugin tables
//$eplug_table_names = array("groupdocs_annotation");
//
//$eplug_tables = array(
//   "CREATE TABLE ".MPREFIX."groupdocs_annotation (
//      userId          varchar(100)   NOT NULL default '',
//      privateKey      varchar(100)   NOT NULL default ''
//   )  ENGINE=MyISAM ;");
?>