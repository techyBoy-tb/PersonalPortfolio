export class FormValidation {

  public static EMAIL_REGEX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  public static MESSAGE_REGEX = /^[a-zA-Z-0-9.,\s_$£&€'"@\)\(+\/]+$/;
  public static NAME_REGEX = /^[ a-zA-Z-']*$/;
  public static ALPHANUMBERIC_HYPEN_REGEX = /^[ a-zA-Z0-9-]*$/;

}
