// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

export const partitionKey = "x-opt-partition-key";
export const sequenceNumber = "x-opt-sequence-number";
export const enqueueSequenceNumber = "x-opt-enqueue-sequence-number";
export const enqueuedTime = "x-opt-enqueued-time";
export const scheduledEnqueueTime = "x-opt-scheduled-enqueue-time";
export const offset = "x-opt-offset";
export const lockedUntil = "x-opt-locked-until";
export const partitionIdName = "x-opt-partition-id";
export const publisher = "x-opt-publisher-name";
export const viaPartitionKey = "x-opt-via-partition-key";
export const deadLetterSource = "x-opt-deadletter-source";
export const enqueuedTimeAnnotation = `amqp.annotation.${enqueuedTime}`;
export const offsetAnnotation = `amqp.annotation.${offset}`;
export const sequenceNumberAnnotation = `amqp.annotation.${sequenceNumber}`;
export const guidSize = 16;
export const message = "message";
export const error = "error";
export const statusCode = "status-code";
export const statusDescription = "status-description";
export const errorCondition = "error-condition";
export const management = "$management";
export const partition = "partition";
export const partitionId = "partitionId";
export const readOperation = "READ";
export const TLS = "tls";
export const establishConnection = "establishConnection";
export const defaultConsumerGroup = "$default";
export const eventHub = "eventhub";
export const cbsEndpoint = "$cbs";
export const cbsReplyTo = "cbs";
export const operationPutToken = "put-token";
export const aadEventHubsAudience = "https://eventhubs.azure.net/";
export const maxUserAgentLength = 128;
export const vendorString = "com.microsoft";
export const attachEpoch = `${vendorString}:epoch`;
export const receiverIdentifierName = `${vendorString}:receiver-name`;
export const enableReceiverRuntimeMetricName = `${vendorString}:enable-receiver-runtime-metric`;
export const timespan = `${vendorString}:timespan`;
export const uri = `${vendorString}:uri`;
export const dateTimeOffset = `${vendorString}:datetime-offset`;
export const sessionFilterName = `${vendorString}:session-filter`;
export const receiverError = "receiver_error";
export const senderError = "sender_error";
export const sessionError = "session_error";
export const connectionError = "connection_error";
export const defaultOperationTimeoutInSeconds = 60;
export const managementRequestKey = "managementRequest";
export const negotiateCbsKey = "negotiateCbs";
export const negotiateClaim = "negotiateClaim";
export const ensureContainerAndBlob = "ensureContainerAndBlob";
export const defaultPrefetchCount = 1000;
export const reconnectLimit = 100;
export const maxMessageIdLength = 128;
export const maxPartitionKeyLength = 128;
export const maxSessionIdLength = 128;
export const pathDelimiter = "/";
export const ruleNameMaximumLength = 50;
export const maximumSqlFilterStatementLength = 1024;
export const maximumSqlRuleActionStatementLength = 1024;
export const maxDeadLetterReasonLength = 4096;
// https://stackoverflow.com/questions/11526504/minimum-and-maximum-date for js
// However we are setting this to the TimeSpan.MaxValue of C#.
export const maxDurationValue = 922337203685477;
export const minDurationValue = -922337203685477;
// https://github.com/Azure/azure-amqp/blob/master/Microsoft.Azure.Amqp/Amqp/AmqpConstants.cs#L47
export const maxAbsoluteExpiryTime = new Date("9999-12-31T07:59:59.000Z").getTime();
export const aadTokenValidityMarginSeconds = 5;
export const connectionReconnectDelay = 300;
export const defaultRetryAttempts = 3;
export const defaultDelayBetweenRetriesInSeconds = 5;
