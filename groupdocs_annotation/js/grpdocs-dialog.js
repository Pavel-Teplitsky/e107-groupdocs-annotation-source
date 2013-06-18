$(function(){
    // Get GroupDocs button to toolbar
    var toolbar = jQuery.get('#data_toolbar1');
    // Waiting for toolbar initialization
    toolbar.success(function(data) {
        // Add GroupDocs button to toolbar
        var icon = '<td style="position: relative"><a role="button" id="content_grpdocsa" href="javascript:;" class="mceButton mceButtonEnabled mce_grpdocsa" onmousedown="return false;" onclick="return false;" aria-labelledby="content_grpdocsa_voice" title="GroupDocs Annotation" tabindex="-1"><span class="mceIcon mce_grpdocsa"><img class="mceIcon" src="../e107_plugins/groupdocs_annotation/images/icon_16.png" alt="GroupDocs Annotation"></span><span class="mceVoiceLabel mceIconOnly" style="display: none;" id="content_grpdocsa_voice">GroupDocs Annotation</span></a></td>';
        var data_toolbar1 = jQuery('#data_toolbar1');
        var last_child = data_toolbar1.find('.mceToolbarEnd');
        last_child.before(icon);
        
        // Toolbar button open action
        jQuery('#content_grpdocsa').bind('click', function(){
            var popupHtml = '<div id="gda-dialog"><table id="info-wrapper"> <tr> <td align="right" class="gray dwl_gray"><strong>File ID</strong><br /></td> <td valign="top"> <input name="fileID" type="text" class="opt dwl" id="fileID" style="width:200px;" value="" /><br/><span id="uri-note"></span> </td> </tr> <tr> <td align="right" class="gray dwl_gray"><strong>Height</strong></td> <td valign="top" style="width:200px;"><input name="height" type="text" class="opt dwl" id="height" size="6" style="text-align:right" value="700" />px</td> </tr> <tr> <td align="right" class="gray dwl_gray"><strong>Width</strong></td> <td valign="top"><input name="width" type="text" class="opt dwl" id="width" size="6" style="text-align:right" value="600" />px</td> </tr> </table><div class="mceActionPanel"> <div style="float: left"> <input type="button" id="gdaInsertCode" name="insert" value="Insert"/> </div> <div style="float: right"> <input type="button" id="gdaCancel" name="cancel" value="Cancel"/> </div> </div></div>';
            jQuery('#grpdocsa-popup').append(popupHtml);
            jQuery('#grpdocsa-popup').toggle();
            
            // Dialog button insert
            jQuery('#gdaInsertCode').bind('click', function(){
                var fileID = jQuery('#fileID').val();
                var width = jQuery('#width').val();
                var height = jQuery('#height').val();
                if(fileID!=null && fileID!='' && width!=null && width!='' && height!=null && height!=''){
                    var iframe = '<iframe src="http://apps.groupdocs.com/document-annotation/embed/'+fileID+'?&referer=e107-Annotation/1.0" frameborder="0" width="'+width+'" height="'+height+'"> If you can see this text, your browser does not support iframes. Please enable iframe support in your browser or use the latest version of any popular web browser such as Mozilla Firefox or Google Chrome. For more help, please check our documentation Wiki: http://groupdocs.com/docs/display/annotation/GroupDocs+Annotation+Integration+with+3rd+Party+Platforms</iframe>';
                    jQuery('#tinymce', jQuery('#data_ifr').contents()).append(iframe);
                }
                jQuery('#gda-dialog').remove();
                jQuery('#grpdocsa-popup').toggle();
            });

            // Dialog button close
            jQuery('#gdaCancel').bind('click', function(){
                jQuery('#gda-dialog').remove();
                jQuery('#grpdocsa-popup').toggle();
            });
        });

    });
    // Add popup wrapper
    jQuery('body').append('<div id="grpdocsa-popup"><div id="grpdocsa-dialog-header">GroupDocs Annotation</div></div>');
});