const zip = new require('node-zip')();

zip.file('test.file', '{"key":"value"}');
const data = zip.generate({base64:true,compression:'DEFLATE'});

console.log(data);

/*

*&---------------------------------------------------------------------*
*& Report Z_TEST_ZLIB
*&---------------------------------------------------------------------*
*&
*&---------------------------------------------------------------------*
REPORT z_test_zlib.

PARAMETERS: base64 type string LOWER CASE DEFAULT 'UEsDBAoAAAAIAHFhj1O/nBg/EQAAAA8AAAAJAAAAdGVzdC5maWxlq1bKTq1UslIqS8wpTVWqBQBQSwECFAAKAAAACABxYY9Tv5wYPxEAAAAPAAAACQAAAAAAAAAAAAAAAAAAAAAAdGVzdC5maWxlUEsFBgAAAAABAAEANwAAADgAAAAAAA=='.

START-OF-SELECTION.

  DATA: lo_zip      TYPE REF TO cl_abap_zip,
        ls_raw_file TYPE xstring.

  FIELD-SYMBOLS: <ls_zip_file> LIKE LINE OF lo_zip->files.

  DATA l_gzip TYPE xstring.
  DATA l_binary TYPE xstring.

  l_gzip = cl_http_utility=>decode_x_base64( base64 ).

  CREATE OBJECT lo_zip.

  lo_zip->load( l_gzip ).

  READ TABLE lo_zip->files INDEX 1 ASSIGNING <ls_zip_file>.

  lo_zip->get(
      EXPORTING
        name    = <ls_zip_file>-name
      IMPORTING
        content = ls_raw_file
      EXCEPTIONS
        OTHERS  = 1 ).

  data: lv_string type string.

  CALL FUNCTION 'ECATT_CONV_XSTRING_TO_STRING'
    EXPORTING
      im_xstring        = ls_raw_file
*     IM_ENCODING       = 'UTF-8'
   IMPORTING
     EX_STRING         = lv_string
            .

  write: / lv_string.
  
*/