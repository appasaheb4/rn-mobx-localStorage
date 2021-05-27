//
//  Bitcoin.m
//  Assignment
//
//  Created by appasaheb4 on 06/05/21.
//

#import "Bitcoin.h"

@implementation Bitcoin

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(
                  getCoin:(NSString *)type
                  get:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject
                  )
{
  NSURL *url = [NSURL URLWithString:@"https://api.coindesk.com/v1/bpi/currentprice.json"];
  //The URL where you send the POST
  NSMutableURLRequest *req = [NSMutableURLRequest requestWithURL:url
                                                     cachePolicy:NSURLRequestReloadIgnoringCacheData
                                                 timeoutInterval:60];
  [req setHTTPMethod:@"GET"];    //Set method to POST
  [req setValue:@"application/x-www-form-urlencoded" forHTTPHeaderField:@"Content-Type"];
  //Set headers for the data, in this case TEXT
  NSHTTPURLResponse* urlResponse = nil; //Response
  NSError *err = [[NSError alloc] init];  //Allocate error
  NSData *responseData = [NSURLConnection sendSynchronousRequest:req
                                               returningResponse:&urlResponse
                                                           error:&err];
  //Guardamos los parametros que obtuvimos en la respuesta
  NSString *responseString = [[NSString alloc] initWithData:responseData encoding:NSASCIIStringEncoding]; //Save the response as string
  NSLog(@"Respueta: %@", responseString); //Check the response
  resolve(responseString);
}


@end
