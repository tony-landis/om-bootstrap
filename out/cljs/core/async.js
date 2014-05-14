// Compiled by ClojureScript 0.0-2197
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21012 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21012 = (function (f,fn_handler,meta21013){
this.f = f;
this.fn_handler = fn_handler;
this.meta21013 = meta21013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21012.cljs$lang$type = true;
cljs.core.async.t21012.cljs$lang$ctorStr = "cljs.core.async/t21012";
cljs.core.async.t21012.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t21012");
});
cljs.core.async.t21012.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21012.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21012.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21014){var self__ = this;
var _21014__$1 = this;return self__.meta21013;
});
cljs.core.async.t21012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21014,meta21013__$1){var self__ = this;
var _21014__$1 = this;return (new cljs.core.async.t21012(self__.f,self__.fn_handler,meta21013__$1));
});
cljs.core.async.__GT_t21012 = (function __GT_t21012(f__$1,fn_handler__$1,meta21013){return (new cljs.core.async.t21012(f__$1,fn_handler__$1,meta21013));
});
}
return (new cljs.core.async.t21012(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21016 = buff;if(G__21016)
{var bit__4128__auto__ = null;if(cljs.core.truth_((function (){var or__3478__auto__ = bit__4128__auto__;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return G__21016.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21016.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21016);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21016);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_21017 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21017);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_21017,ret){
return (function (){return fn1.call(null,val_21017);
});})(val_21017,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3466__auto__ = ret;if(cljs.core.truth_(and__3466__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3466__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4326__auto___21018 = n;var x_21019 = 0;while(true){
if((x_21019 < n__4326__auto___21018))
{(a[x_21019] = 0);
{
var G__21020 = (x_21019 + 1);
x_21019 = G__21020;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__21021 = (i + 1);
i = G__21021;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21025 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21025 = (function (flag,alt_flag,meta21026){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21026 = meta21026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21025.cljs$lang$type = true;
cljs.core.async.t21025.cljs$lang$ctorStr = "cljs.core.async/t21025";
cljs.core.async.t21025.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t21025");
});})(flag))
;
cljs.core.async.t21025.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21025.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t21025.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t21025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21027){var self__ = this;
var _21027__$1 = this;return self__.meta21026;
});})(flag))
;
cljs.core.async.t21025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21027,meta21026__$1){var self__ = this;
var _21027__$1 = this;return (new cljs.core.async.t21025(self__.flag,self__.alt_flag,meta21026__$1));
});})(flag))
;
cljs.core.async.__GT_t21025 = ((function (flag){
return (function __GT_t21025(flag__$1,alt_flag__$1,meta21026){return (new cljs.core.async.t21025(flag__$1,alt_flag__$1,meta21026));
});})(flag))
;
}
return (new cljs.core.async.t21025(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21031 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21031 = (function (cb,flag,alt_handler,meta21032){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21032 = meta21032;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21031.cljs$lang$type = true;
cljs.core.async.t21031.cljs$lang$ctorStr = "cljs.core.async/t21031";
cljs.core.async.t21031.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t21031");
});
cljs.core.async.t21031.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21031.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21031.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21033){var self__ = this;
var _21033__$1 = this;return self__.meta21032;
});
cljs.core.async.t21031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21033,meta21032__$1){var self__ = this;
var _21033__$1 = this;return (new cljs.core.async.t21031(self__.cb,self__.flag,self__.alt_handler,meta21032__$1));
});
cljs.core.async.__GT_t21031 = (function __GT_t21031(cb__$1,flag__$1,alt_handler__$1,meta21032){return (new cljs.core.async.t21031(cb__$1,flag__$1,alt_handler__$1,meta21032));
});
}
return (new cljs.core.async.t21031(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21034_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21034_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3478__auto__ = wport;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__21035 = (i + 1);
i = G__21035;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3478__auto__ = ret;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3466__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3466__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3466__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__21036){var map__21038 = p__21036;var map__21038__$1 = ((cljs.core.seq_QMARK_.call(null,map__21038))?cljs.core.apply.call(null,cljs.core.hash_map,map__21038):map__21038);var opts = map__21038__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__21036 = null;if (arguments.length > 1) {
  p__21036 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21036);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21039){
var ports = cljs.core.first(arglist__21039);
var p__21036 = cljs.core.rest(arglist__21039);
return alts_BANG___delegate(ports,p__21036);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21047 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21047 = (function (ch,f,map_LT_,meta21048){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21048 = meta21048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21047.cljs$lang$type = true;
cljs.core.async.t21047.cljs$lang$ctorStr = "cljs.core.async/t21047";
cljs.core.async.t21047.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t21047");
});
cljs.core.async.t21047.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21047.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t21047.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21047.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21050 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21050 = (function (fn1,_,meta21048,ch,f,map_LT_,meta21051){
this.fn1 = fn1;
this._ = _;
this.meta21048 = meta21048;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21051 = meta21051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21050.cljs$lang$type = true;
cljs.core.async.t21050.cljs$lang$ctorStr = "cljs.core.async/t21050";
cljs.core.async.t21050.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t21050");
});})(___$1))
;
cljs.core.async.t21050.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21050.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t21050.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t21050.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__21040_SHARP_){return f1.call(null,(((p1__21040_SHARP_ == null))?null:self__.f.call(null,p1__21040_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t21050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21052){var self__ = this;
var _21052__$1 = this;return self__.meta21051;
});})(___$1))
;
cljs.core.async.t21050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21052,meta21051__$1){var self__ = this;
var _21052__$1 = this;return (new cljs.core.async.t21050(self__.fn1,self__._,self__.meta21048,self__.ch,self__.f,self__.map_LT_,meta21051__$1));
});})(___$1))
;
cljs.core.async.__GT_t21050 = ((function (___$1){
return (function __GT_t21050(fn1__$1,___$2,meta21048__$1,ch__$2,f__$2,map_LT___$2,meta21051){return (new cljs.core.async.t21050(fn1__$1,___$2,meta21048__$1,ch__$2,f__$2,map_LT___$2,meta21051));
});})(___$1))
;
}
return (new cljs.core.async.t21050(fn1,___$1,self__.meta21048,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3466__auto__ = ret;if(cljs.core.truth_(and__3466__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3466__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t21047.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21047.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21049){var self__ = this;
var _21049__$1 = this;return self__.meta21048;
});
cljs.core.async.t21047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21049,meta21048__$1){var self__ = this;
var _21049__$1 = this;return (new cljs.core.async.t21047(self__.ch,self__.f,self__.map_LT_,meta21048__$1));
});
cljs.core.async.__GT_t21047 = (function __GT_t21047(ch__$1,f__$1,map_LT___$1,meta21048){return (new cljs.core.async.t21047(ch__$1,f__$1,map_LT___$1,meta21048));
});
}
return (new cljs.core.async.t21047(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21056 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21056 = (function (ch,f,map_GT_,meta21057){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21057 = meta21057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21056.cljs$lang$type = true;
cljs.core.async.t21056.cljs$lang$ctorStr = "cljs.core.async/t21056";
cljs.core.async.t21056.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t21056");
});
cljs.core.async.t21056.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21056.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t21056.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21056.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21056.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21056.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21058){var self__ = this;
var _21058__$1 = this;return self__.meta21057;
});
cljs.core.async.t21056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21058,meta21057__$1){var self__ = this;
var _21058__$1 = this;return (new cljs.core.async.t21056(self__.ch,self__.f,self__.map_GT_,meta21057__$1));
});
cljs.core.async.__GT_t21056 = (function __GT_t21056(ch__$1,f__$1,map_GT___$1,meta21057){return (new cljs.core.async.t21056(ch__$1,f__$1,map_GT___$1,meta21057));
});
}
return (new cljs.core.async.t21056(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21062 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21062 = (function (ch,p,filter_GT_,meta21063){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21063 = meta21063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21062.cljs$lang$type = true;
cljs.core.async.t21062.cljs$lang$ctorStr = "cljs.core.async/t21062";
cljs.core.async.t21062.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t21062");
});
cljs.core.async.t21062.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21062.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t21062.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21062.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21062.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21062.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21064){var self__ = this;
var _21064__$1 = this;return self__.meta21063;
});
cljs.core.async.t21062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21064,meta21063__$1){var self__ = this;
var _21064__$1 = this;return (new cljs.core.async.t21062(self__.ch,self__.p,self__.filter_GT_,meta21063__$1));
});
cljs.core.async.__GT_t21062 = (function __GT_t21062(ch__$1,p__$1,filter_GT___$1,meta21063){return (new cljs.core.async.t21062(ch__$1,p__$1,filter_GT___$1,meta21063));
});
}
return (new cljs.core.async.t21062(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6984__auto___21147 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6984__auto___21147,out){
return (function (){var f__6985__auto__ = (function (){var switch__6920__auto__ = ((function (c__6984__auto___21147,out){
return (function (state_21126){var state_val_21127 = (state_21126[1]);if((state_val_21127 === 7))
{var inst_21122 = (state_21126[2]);var state_21126__$1 = state_21126;var statearr_21128_21148 = state_21126__$1;(statearr_21128_21148[2] = inst_21122);
(statearr_21128_21148[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21127 === 1))
{var state_21126__$1 = state_21126;var statearr_21129_21149 = state_21126__$1;(statearr_21129_21149[2] = null);
(statearr_21129_21149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21127 === 4))
{var inst_21108 = (state_21126[7]);var inst_21108__$1 = (state_21126[2]);var inst_21109 = (inst_21108__$1 == null);var state_21126__$1 = (function (){var statearr_21130 = state_21126;(statearr_21130[7] = inst_21108__$1);
return statearr_21130;
})();if(cljs.core.truth_(inst_21109))
{var statearr_21131_21150 = state_21126__$1;(statearr_21131_21150[1] = 5);
} else
{var statearr_21132_21151 = state_21126__$1;(statearr_21132_21151[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21127 === 6))
{var inst_21108 = (state_21126[7]);var inst_21113 = p.call(null,inst_21108);var state_21126__$1 = state_21126;if(cljs.core.truth_(inst_21113))
{var statearr_21133_21152 = state_21126__$1;(statearr_21133_21152[1] = 8);
} else
{var statearr_21134_21153 = state_21126__$1;(statearr_21134_21153[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21127 === 3))
{var inst_21124 = (state_21126[2]);var state_21126__$1 = state_21126;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21126__$1,inst_21124);
} else
{if((state_val_21127 === 2))
{var state_21126__$1 = state_21126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21126__$1,4,ch);
} else
{if((state_val_21127 === 11))
{var inst_21116 = (state_21126[2]);var state_21126__$1 = state_21126;var statearr_21135_21154 = state_21126__$1;(statearr_21135_21154[2] = inst_21116);
(statearr_21135_21154[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21127 === 9))
{var state_21126__$1 = state_21126;var statearr_21136_21155 = state_21126__$1;(statearr_21136_21155[2] = null);
(statearr_21136_21155[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21127 === 5))
{var inst_21111 = cljs.core.async.close_BANG_.call(null,out);var state_21126__$1 = state_21126;var statearr_21137_21156 = state_21126__$1;(statearr_21137_21156[2] = inst_21111);
(statearr_21137_21156[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21127 === 10))
{var inst_21119 = (state_21126[2]);var state_21126__$1 = (function (){var statearr_21138 = state_21126;(statearr_21138[8] = inst_21119);
return statearr_21138;
})();var statearr_21139_21157 = state_21126__$1;(statearr_21139_21157[2] = null);
(statearr_21139_21157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21127 === 8))
{var inst_21108 = (state_21126[7]);var state_21126__$1 = state_21126;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21126__$1,11,out,inst_21108);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6984__auto___21147,out))
;return ((function (switch__6920__auto__,c__6984__auto___21147,out){
return (function() {
var state_machine__6921__auto__ = null;
var state_machine__6921__auto____0 = (function (){var statearr_21143 = [null,null,null,null,null,null,null,null,null];(statearr_21143[0] = state_machine__6921__auto__);
(statearr_21143[1] = 1);
return statearr_21143;
});
var state_machine__6921__auto____1 = (function (state_21126){while(true){
var ret_value__6922__auto__ = (function (){try{while(true){
var result__6923__auto__ = switch__6920__auto__.call(null,state_21126);if(cljs.core.keyword_identical_QMARK_.call(null,result__6923__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6923__auto__;
}
break;
}
}catch (e21144){if((e21144 instanceof Object))
{var ex__6924__auto__ = e21144;var statearr_21145_21158 = state_21126;(statearr_21145_21158[5] = ex__6924__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21126);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6922__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21159 = state_21126;
state_21126 = G__21159;
continue;
}
} else
{return ret_value__6922__auto__;
}
break;
}
});
state_machine__6921__auto__ = function(state_21126){
switch(arguments.length){
case 0:
return state_machine__6921__auto____0.call(this);
case 1:
return state_machine__6921__auto____1.call(this,state_21126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6921__auto____0;
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6921__auto____1;
return state_machine__6921__auto__;
})()
;})(switch__6920__auto__,c__6984__auto___21147,out))
})();var state__6986__auto__ = (function (){var statearr_21146 = f__6985__auto__.call(null);(statearr_21146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6984__auto___21147);
return statearr_21146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6986__auto__);
});})(c__6984__auto___21147,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6984__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6984__auto__){
return (function (){var f__6985__auto__ = (function (){var switch__6920__auto__ = ((function (c__6984__auto__){
return (function (state_21311){var state_val_21312 = (state_21311[1]);if((state_val_21312 === 7))
{var inst_21307 = (state_21311[2]);var state_21311__$1 = state_21311;var statearr_21313_21350 = state_21311__$1;(statearr_21313_21350[2] = inst_21307);
(statearr_21313_21350[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21312 === 20))
{var inst_21282 = (state_21311[7]);var inst_21293 = (state_21311[2]);var inst_21294 = cljs.core.next.call(null,inst_21282);var inst_21268 = inst_21294;var inst_21269 = null;var inst_21270 = 0;var inst_21271 = 0;var state_21311__$1 = (function (){var statearr_21314 = state_21311;(statearr_21314[8] = inst_21268);
(statearr_21314[9] = inst_21270);
(statearr_21314[10] = inst_21269);
(statearr_21314[11] = inst_21271);
(statearr_21314[12] = inst_21293);
return statearr_21314;
})();var statearr_21315_21351 = state_21311__$1;(statearr_21315_21351[2] = null);
(statearr_21315_21351[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21312 === 1))
{var state_21311__$1 = state_21311;var statearr_21316_21352 = state_21311__$1;(statearr_21316_21352[2] = null);
(statearr_21316_21352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21312 === 4))
{var inst_21257 = (state_21311[13]);var inst_21257__$1 = (state_21311[2]);var inst_21258 = (inst_21257__$1 == null);var state_21311__$1 = (function (){var statearr_21320 = state_21311;(statearr_21320[13] = inst_21257__$1);
return statearr_21320;
})();if(cljs.core.truth_(inst_21258))
{var statearr_21321_21353 = state_21311__$1;(statearr_21321_21353[1] = 5);
} else
{var statearr_21322_21354 = state_21311__$1;(statearr_21322_21354[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21312 === 15))
{var state_21311__$1 = state_21311;var statearr_21323_21355 = state_21311__$1;(statearr_21323_21355[2] = null);
(statearr_21323_21355[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21312 === 13))
{var inst_21268 = (state_21311[8]);var inst_21270 = (state_21311[9]);var inst_21269 = (state_21311[10]);var inst_21271 = (state_21311[11]);var inst_21278 = (state_21311[2]);var inst_21279 = (inst_21271 + 1);var tmp21317 = inst_21268;var tmp21318 = inst_21270;var tmp21319 = inst_21269;var inst_21268__$1 = tmp21317;var inst_21269__$1 = tmp21319;var inst_21270__$1 = tmp21318;var inst_21271__$1 = inst_21279;var state_21311__$1 = (function (){var statearr_21324 = state_21311;(statearr_21324[8] = inst_21268__$1);
(statearr_21324[9] = inst_21270__$1);
(statearr_21324[10] = inst_21269__$1);
(statearr_21324[14] = inst_21278);
(statearr_21324[11] = inst_21271__$1);
return statearr_21324;
})();var statearr_21325_21356 = state_21311__$1;(statearr_21325_21356[2] = null);
(statearr_21325_21356[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21312 === 6))
{var inst_21257 = (state_21311[13]);var inst_21262 = f.call(null,inst_21257);var inst_21267 = cljs.core.seq.call(null,inst_21262);var inst_21268 = inst_21267;var inst_21269 = null;var inst_21270 = 0;var inst_21271 = 0;var state_21311__$1 = (function (){var statearr_21326 = state_21311;(statearr_21326[8] = inst_21268);
(statearr_21326[9] = inst_21270);
(statearr_21326[10] = inst_21269);
(statearr_21326[11] = inst_21271);
return statearr_21326;
})();var statearr_21327_21357 = state_21311__$1;(statearr_21327_21357[2] = null);
(statearr_21327_21357[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21312 === 17))
{var inst_21282 = (state_21311[7]);var inst_21286 = cljs.core.chunk_first.call(null,inst_21282);var inst_21287 = cljs.core.chunk_rest.call(null,inst_21282);var inst_21288 = cljs.core.count.call(null,inst_21286);var inst_21268 = inst_21287;var inst_21269 = inst_21286;var inst_21270 = inst_21288;var inst_21271 = 0;var state_21311__$1 = (function (){var statearr_21328 = state_21311;(statearr_21328[8] = inst_21268);
(statearr_21328[9] = inst_21270);
(statearr_21328[10] = inst_21269);
(statearr_21328[11] = inst_21271);
return statearr_21328;
})();var statearr_21329_21358 = state_21311__$1;(statearr_21329_21358[2] = null);
(statearr_21329_21358[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21312 === 3))
{var inst_21309 = (state_21311[2]);var state_21311__$1 = state_21311;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21311__$1,inst_21309);
} else
{if((state_val_21312 === 12))
{var inst_21302 = (state_21311[2]);var state_21311__$1 = state_21311;var statearr_21330_21359 = state_21311__$1;(statearr_21330_21359[2] = inst_21302);
(statearr_21330_21359[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21312 === 2))
{var state_21311__$1 = state_21311;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21311__$1,4,in$);
} else
{if((state_val_21312 === 19))
{var inst_21297 = (state_21311[2]);var state_21311__$1 = state_21311;var statearr_21331_21360 = state_21311__$1;(statearr_21331_21360[2] = inst_21297);
(statearr_21331_21360[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21312 === 11))
{var inst_21268 = (state_21311[8]);var inst_21282 = (state_21311[7]);var inst_21282__$1 = cljs.core.seq.call(null,inst_21268);var state_21311__$1 = (function (){var statearr_21332 = state_21311;(statearr_21332[7] = inst_21282__$1);
return statearr_21332;
})();if(inst_21282__$1)
{var statearr_21333_21361 = state_21311__$1;(statearr_21333_21361[1] = 14);
} else
{var statearr_21334_21362 = state_21311__$1;(statearr_21334_21362[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21312 === 9))
{var inst_21304 = (state_21311[2]);var state_21311__$1 = (function (){var statearr_21335 = state_21311;(statearr_21335[15] = inst_21304);
return statearr_21335;
})();var statearr_21336_21363 = state_21311__$1;(statearr_21336_21363[2] = null);
(statearr_21336_21363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21312 === 5))
{var inst_21260 = cljs.core.async.close_BANG_.call(null,out);var state_21311__$1 = state_21311;var statearr_21337_21364 = state_21311__$1;(statearr_21337_21364[2] = inst_21260);
(statearr_21337_21364[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21312 === 14))
{var inst_21282 = (state_21311[7]);var inst_21284 = cljs.core.chunked_seq_QMARK_.call(null,inst_21282);var state_21311__$1 = state_21311;if(inst_21284)
{var statearr_21338_21365 = state_21311__$1;(statearr_21338_21365[1] = 17);
} else
{var statearr_21339_21366 = state_21311__$1;(statearr_21339_21366[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21312 === 16))
{var inst_21300 = (state_21311[2]);var state_21311__$1 = state_21311;var statearr_21340_21367 = state_21311__$1;(statearr_21340_21367[2] = inst_21300);
(statearr_21340_21367[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21312 === 10))
{var inst_21269 = (state_21311[10]);var inst_21271 = (state_21311[11]);var inst_21276 = cljs.core._nth.call(null,inst_21269,inst_21271);var state_21311__$1 = state_21311;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21311__$1,13,out,inst_21276);
} else
{if((state_val_21312 === 18))
{var inst_21282 = (state_21311[7]);var inst_21291 = cljs.core.first.call(null,inst_21282);var state_21311__$1 = state_21311;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21311__$1,20,out,inst_21291);
} else
{if((state_val_21312 === 8))
{var inst_21270 = (state_21311[9]);var inst_21271 = (state_21311[11]);var inst_21273 = (inst_21271 < inst_21270);var inst_21274 = inst_21273;var state_21311__$1 = state_21311;if(cljs.core.truth_(inst_21274))
{var statearr_21341_21368 = state_21311__$1;(statearr_21341_21368[1] = 10);
} else
{var statearr_21342_21369 = state_21311__$1;(statearr_21342_21369[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6984__auto__))
;return ((function (switch__6920__auto__,c__6984__auto__){
return (function() {
var state_machine__6921__auto__ = null;
var state_machine__6921__auto____0 = (function (){var statearr_21346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21346[0] = state_machine__6921__auto__);
(statearr_21346[1] = 1);
return statearr_21346;
});
var state_machine__6921__auto____1 = (function (state_21311){while(true){
var ret_value__6922__auto__ = (function (){try{while(true){
var result__6923__auto__ = switch__6920__auto__.call(null,state_21311);if(cljs.core.keyword_identical_QMARK_.call(null,result__6923__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6923__auto__;
}
break;
}
}catch (e21347){if((e21347 instanceof Object))
{var ex__6924__auto__ = e21347;var statearr_21348_21370 = state_21311;(statearr_21348_21370[5] = ex__6924__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21311);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6922__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21371 = state_21311;
state_21311 = G__21371;
continue;
}
} else
{return ret_value__6922__auto__;
}
break;
}
});
state_machine__6921__auto__ = function(state_21311){
switch(arguments.length){
case 0:
return state_machine__6921__auto____0.call(this);
case 1:
return state_machine__6921__auto____1.call(this,state_21311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6921__auto____0;
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6921__auto____1;
return state_machine__6921__auto__;
})()
;})(switch__6920__auto__,c__6984__auto__))
})();var state__6986__auto__ = (function (){var statearr_21349 = f__6985__auto__.call(null);(statearr_21349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6984__auto__);
return statearr_21349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6986__auto__);
});})(c__6984__auto__))
);
return c__6984__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6984__auto___21452 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6984__auto___21452){
return (function (){var f__6985__auto__ = (function (){var switch__6920__auto__ = ((function (c__6984__auto___21452){
return (function (state_21431){var state_val_21432 = (state_21431[1]);if((state_val_21432 === 7))
{var inst_21427 = (state_21431[2]);var state_21431__$1 = state_21431;var statearr_21433_21453 = state_21431__$1;(statearr_21433_21453[2] = inst_21427);
(statearr_21433_21453[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 1))
{var state_21431__$1 = state_21431;var statearr_21434_21454 = state_21431__$1;(statearr_21434_21454[2] = null);
(statearr_21434_21454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 4))
{var inst_21414 = (state_21431[7]);var inst_21414__$1 = (state_21431[2]);var inst_21415 = (inst_21414__$1 == null);var state_21431__$1 = (function (){var statearr_21435 = state_21431;(statearr_21435[7] = inst_21414__$1);
return statearr_21435;
})();if(cljs.core.truth_(inst_21415))
{var statearr_21436_21455 = state_21431__$1;(statearr_21436_21455[1] = 5);
} else
{var statearr_21437_21456 = state_21431__$1;(statearr_21437_21456[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 6))
{var inst_21414 = (state_21431[7]);var state_21431__$1 = state_21431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21431__$1,11,to,inst_21414);
} else
{if((state_val_21432 === 3))
{var inst_21429 = (state_21431[2]);var state_21431__$1 = state_21431;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21431__$1,inst_21429);
} else
{if((state_val_21432 === 2))
{var state_21431__$1 = state_21431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21431__$1,4,from);
} else
{if((state_val_21432 === 11))
{var inst_21424 = (state_21431[2]);var state_21431__$1 = (function (){var statearr_21438 = state_21431;(statearr_21438[8] = inst_21424);
return statearr_21438;
})();var statearr_21439_21457 = state_21431__$1;(statearr_21439_21457[2] = null);
(statearr_21439_21457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 9))
{var state_21431__$1 = state_21431;var statearr_21440_21458 = state_21431__$1;(statearr_21440_21458[2] = null);
(statearr_21440_21458[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 5))
{var state_21431__$1 = state_21431;if(cljs.core.truth_(close_QMARK_))
{var statearr_21441_21459 = state_21431__$1;(statearr_21441_21459[1] = 8);
} else
{var statearr_21442_21460 = state_21431__$1;(statearr_21442_21460[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 10))
{var inst_21421 = (state_21431[2]);var state_21431__$1 = state_21431;var statearr_21443_21461 = state_21431__$1;(statearr_21443_21461[2] = inst_21421);
(statearr_21443_21461[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 8))
{var inst_21418 = cljs.core.async.close_BANG_.call(null,to);var state_21431__$1 = state_21431;var statearr_21444_21462 = state_21431__$1;(statearr_21444_21462[2] = inst_21418);
(statearr_21444_21462[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6984__auto___21452))
;return ((function (switch__6920__auto__,c__6984__auto___21452){
return (function() {
var state_machine__6921__auto__ = null;
var state_machine__6921__auto____0 = (function (){var statearr_21448 = [null,null,null,null,null,null,null,null,null];(statearr_21448[0] = state_machine__6921__auto__);
(statearr_21448[1] = 1);
return statearr_21448;
});
var state_machine__6921__auto____1 = (function (state_21431){while(true){
var ret_value__6922__auto__ = (function (){try{while(true){
var result__6923__auto__ = switch__6920__auto__.call(null,state_21431);if(cljs.core.keyword_identical_QMARK_.call(null,result__6923__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6923__auto__;
}
break;
}
}catch (e21449){if((e21449 instanceof Object))
{var ex__6924__auto__ = e21449;var statearr_21450_21463 = state_21431;(statearr_21450_21463[5] = ex__6924__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21431);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21449;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6922__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21464 = state_21431;
state_21431 = G__21464;
continue;
}
} else
{return ret_value__6922__auto__;
}
break;
}
});
state_machine__6921__auto__ = function(state_21431){
switch(arguments.length){
case 0:
return state_machine__6921__auto____0.call(this);
case 1:
return state_machine__6921__auto____1.call(this,state_21431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6921__auto____0;
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6921__auto____1;
return state_machine__6921__auto__;
})()
;})(switch__6920__auto__,c__6984__auto___21452))
})();var state__6986__auto__ = (function (){var statearr_21451 = f__6985__auto__.call(null);(statearr_21451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6984__auto___21452);
return statearr_21451;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6986__auto__);
});})(c__6984__auto___21452))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6984__auto___21551 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6984__auto___21551,tc,fc){
return (function (){var f__6985__auto__ = (function (){var switch__6920__auto__ = ((function (c__6984__auto___21551,tc,fc){
return (function (state_21529){var state_val_21530 = (state_21529[1]);if((state_val_21530 === 7))
{var inst_21525 = (state_21529[2]);var state_21529__$1 = state_21529;var statearr_21531_21552 = state_21529__$1;(statearr_21531_21552[2] = inst_21525);
(statearr_21531_21552[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21530 === 1))
{var state_21529__$1 = state_21529;var statearr_21532_21553 = state_21529__$1;(statearr_21532_21553[2] = null);
(statearr_21532_21553[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21530 === 4))
{var inst_21510 = (state_21529[7]);var inst_21510__$1 = (state_21529[2]);var inst_21511 = (inst_21510__$1 == null);var state_21529__$1 = (function (){var statearr_21533 = state_21529;(statearr_21533[7] = inst_21510__$1);
return statearr_21533;
})();if(cljs.core.truth_(inst_21511))
{var statearr_21534_21554 = state_21529__$1;(statearr_21534_21554[1] = 5);
} else
{var statearr_21535_21555 = state_21529__$1;(statearr_21535_21555[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21530 === 6))
{var inst_21510 = (state_21529[7]);var inst_21516 = p.call(null,inst_21510);var state_21529__$1 = state_21529;if(cljs.core.truth_(inst_21516))
{var statearr_21536_21556 = state_21529__$1;(statearr_21536_21556[1] = 9);
} else
{var statearr_21537_21557 = state_21529__$1;(statearr_21537_21557[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21530 === 3))
{var inst_21527 = (state_21529[2]);var state_21529__$1 = state_21529;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21529__$1,inst_21527);
} else
{if((state_val_21530 === 2))
{var state_21529__$1 = state_21529;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21529__$1,4,ch);
} else
{if((state_val_21530 === 11))
{var inst_21510 = (state_21529[7]);var inst_21520 = (state_21529[2]);var state_21529__$1 = state_21529;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21529__$1,8,inst_21520,inst_21510);
} else
{if((state_val_21530 === 9))
{var state_21529__$1 = state_21529;var statearr_21538_21558 = state_21529__$1;(statearr_21538_21558[2] = tc);
(statearr_21538_21558[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21530 === 5))
{var inst_21513 = cljs.core.async.close_BANG_.call(null,tc);var inst_21514 = cljs.core.async.close_BANG_.call(null,fc);var state_21529__$1 = (function (){var statearr_21539 = state_21529;(statearr_21539[8] = inst_21513);
return statearr_21539;
})();var statearr_21540_21559 = state_21529__$1;(statearr_21540_21559[2] = inst_21514);
(statearr_21540_21559[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21530 === 10))
{var state_21529__$1 = state_21529;var statearr_21541_21560 = state_21529__$1;(statearr_21541_21560[2] = fc);
(statearr_21541_21560[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21530 === 8))
{var inst_21522 = (state_21529[2]);var state_21529__$1 = (function (){var statearr_21542 = state_21529;(statearr_21542[9] = inst_21522);
return statearr_21542;
})();var statearr_21543_21561 = state_21529__$1;(statearr_21543_21561[2] = null);
(statearr_21543_21561[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6984__auto___21551,tc,fc))
;return ((function (switch__6920__auto__,c__6984__auto___21551,tc,fc){
return (function() {
var state_machine__6921__auto__ = null;
var state_machine__6921__auto____0 = (function (){var statearr_21547 = [null,null,null,null,null,null,null,null,null,null];(statearr_21547[0] = state_machine__6921__auto__);
(statearr_21547[1] = 1);
return statearr_21547;
});
var state_machine__6921__auto____1 = (function (state_21529){while(true){
var ret_value__6922__auto__ = (function (){try{while(true){
var result__6923__auto__ = switch__6920__auto__.call(null,state_21529);if(cljs.core.keyword_identical_QMARK_.call(null,result__6923__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6923__auto__;
}
break;
}
}catch (e21548){if((e21548 instanceof Object))
{var ex__6924__auto__ = e21548;var statearr_21549_21562 = state_21529;(statearr_21549_21562[5] = ex__6924__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21529);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6922__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21563 = state_21529;
state_21529 = G__21563;
continue;
}
} else
{return ret_value__6922__auto__;
}
break;
}
});
state_machine__6921__auto__ = function(state_21529){
switch(arguments.length){
case 0:
return state_machine__6921__auto____0.call(this);
case 1:
return state_machine__6921__auto____1.call(this,state_21529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6921__auto____0;
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6921__auto____1;
return state_machine__6921__auto__;
})()
;})(switch__6920__auto__,c__6984__auto___21551,tc,fc))
})();var state__6986__auto__ = (function (){var statearr_21550 = f__6985__auto__.call(null);(statearr_21550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6984__auto___21551);
return statearr_21550;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6986__auto__);
});})(c__6984__auto___21551,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6984__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6984__auto__){
return (function (){var f__6985__auto__ = (function (){var switch__6920__auto__ = ((function (c__6984__auto__){
return (function (state_21610){var state_val_21611 = (state_21610[1]);if((state_val_21611 === 7))
{var inst_21606 = (state_21610[2]);var state_21610__$1 = state_21610;var statearr_21612_21628 = state_21610__$1;(statearr_21612_21628[2] = inst_21606);
(statearr_21612_21628[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21611 === 6))
{var inst_21596 = (state_21610[7]);var inst_21599 = (state_21610[8]);var inst_21603 = f.call(null,inst_21596,inst_21599);var inst_21596__$1 = inst_21603;var state_21610__$1 = (function (){var statearr_21613 = state_21610;(statearr_21613[7] = inst_21596__$1);
return statearr_21613;
})();var statearr_21614_21629 = state_21610__$1;(statearr_21614_21629[2] = null);
(statearr_21614_21629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21611 === 5))
{var inst_21596 = (state_21610[7]);var state_21610__$1 = state_21610;var statearr_21615_21630 = state_21610__$1;(statearr_21615_21630[2] = inst_21596);
(statearr_21615_21630[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21611 === 4))
{var inst_21599 = (state_21610[8]);var inst_21599__$1 = (state_21610[2]);var inst_21600 = (inst_21599__$1 == null);var state_21610__$1 = (function (){var statearr_21616 = state_21610;(statearr_21616[8] = inst_21599__$1);
return statearr_21616;
})();if(cljs.core.truth_(inst_21600))
{var statearr_21617_21631 = state_21610__$1;(statearr_21617_21631[1] = 5);
} else
{var statearr_21618_21632 = state_21610__$1;(statearr_21618_21632[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21611 === 3))
{var inst_21608 = (state_21610[2]);var state_21610__$1 = state_21610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21610__$1,inst_21608);
} else
{if((state_val_21611 === 2))
{var state_21610__$1 = state_21610;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21610__$1,4,ch);
} else
{if((state_val_21611 === 1))
{var inst_21596 = init;var state_21610__$1 = (function (){var statearr_21619 = state_21610;(statearr_21619[7] = inst_21596);
return statearr_21619;
})();var statearr_21620_21633 = state_21610__$1;(statearr_21620_21633[2] = null);
(statearr_21620_21633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6984__auto__))
;return ((function (switch__6920__auto__,c__6984__auto__){
return (function() {
var state_machine__6921__auto__ = null;
var state_machine__6921__auto____0 = (function (){var statearr_21624 = [null,null,null,null,null,null,null,null,null];(statearr_21624[0] = state_machine__6921__auto__);
(statearr_21624[1] = 1);
return statearr_21624;
});
var state_machine__6921__auto____1 = (function (state_21610){while(true){
var ret_value__6922__auto__ = (function (){try{while(true){
var result__6923__auto__ = switch__6920__auto__.call(null,state_21610);if(cljs.core.keyword_identical_QMARK_.call(null,result__6923__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6923__auto__;
}
break;
}
}catch (e21625){if((e21625 instanceof Object))
{var ex__6924__auto__ = e21625;var statearr_21626_21634 = state_21610;(statearr_21626_21634[5] = ex__6924__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21610);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21625;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6922__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21635 = state_21610;
state_21610 = G__21635;
continue;
}
} else
{return ret_value__6922__auto__;
}
break;
}
});
state_machine__6921__auto__ = function(state_21610){
switch(arguments.length){
case 0:
return state_machine__6921__auto____0.call(this);
case 1:
return state_machine__6921__auto____1.call(this,state_21610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6921__auto____0;
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6921__auto____1;
return state_machine__6921__auto__;
})()
;})(switch__6920__auto__,c__6984__auto__))
})();var state__6986__auto__ = (function (){var statearr_21627 = f__6985__auto__.call(null);(statearr_21627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6984__auto__);
return statearr_21627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6986__auto__);
});})(c__6984__auto__))
);
return c__6984__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6984__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6984__auto__){
return (function (){var f__6985__auto__ = (function (){var switch__6920__auto__ = ((function (c__6984__auto__){
return (function (state_21697){var state_val_21698 = (state_21697[1]);if((state_val_21698 === 7))
{var inst_21678 = (state_21697[7]);var inst_21683 = (state_21697[2]);var inst_21684 = cljs.core.next.call(null,inst_21678);var inst_21678__$1 = inst_21684;var state_21697__$1 = (function (){var statearr_21699 = state_21697;(statearr_21699[8] = inst_21683);
(statearr_21699[7] = inst_21678__$1);
return statearr_21699;
})();var statearr_21700_21718 = state_21697__$1;(statearr_21700_21718[2] = null);
(statearr_21700_21718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21698 === 1))
{var inst_21677 = cljs.core.seq.call(null,coll);var inst_21678 = inst_21677;var state_21697__$1 = (function (){var statearr_21701 = state_21697;(statearr_21701[7] = inst_21678);
return statearr_21701;
})();var statearr_21702_21719 = state_21697__$1;(statearr_21702_21719[2] = null);
(statearr_21702_21719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21698 === 4))
{var inst_21678 = (state_21697[7]);var inst_21681 = cljs.core.first.call(null,inst_21678);var state_21697__$1 = state_21697;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21697__$1,7,ch,inst_21681);
} else
{if((state_val_21698 === 6))
{var inst_21693 = (state_21697[2]);var state_21697__$1 = state_21697;var statearr_21703_21720 = state_21697__$1;(statearr_21703_21720[2] = inst_21693);
(statearr_21703_21720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21698 === 3))
{var inst_21695 = (state_21697[2]);var state_21697__$1 = state_21697;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21697__$1,inst_21695);
} else
{if((state_val_21698 === 2))
{var inst_21678 = (state_21697[7]);var state_21697__$1 = state_21697;if(cljs.core.truth_(inst_21678))
{var statearr_21704_21721 = state_21697__$1;(statearr_21704_21721[1] = 4);
} else
{var statearr_21705_21722 = state_21697__$1;(statearr_21705_21722[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21698 === 9))
{var state_21697__$1 = state_21697;var statearr_21706_21723 = state_21697__$1;(statearr_21706_21723[2] = null);
(statearr_21706_21723[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21698 === 5))
{var state_21697__$1 = state_21697;if(cljs.core.truth_(close_QMARK_))
{var statearr_21707_21724 = state_21697__$1;(statearr_21707_21724[1] = 8);
} else
{var statearr_21708_21725 = state_21697__$1;(statearr_21708_21725[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21698 === 10))
{var inst_21691 = (state_21697[2]);var state_21697__$1 = state_21697;var statearr_21709_21726 = state_21697__$1;(statearr_21709_21726[2] = inst_21691);
(statearr_21709_21726[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21698 === 8))
{var inst_21688 = cljs.core.async.close_BANG_.call(null,ch);var state_21697__$1 = state_21697;var statearr_21710_21727 = state_21697__$1;(statearr_21710_21727[2] = inst_21688);
(statearr_21710_21727[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__6984__auto__))
;return ((function (switch__6920__auto__,c__6984__auto__){
return (function() {
var state_machine__6921__auto__ = null;
var state_machine__6921__auto____0 = (function (){var statearr_21714 = [null,null,null,null,null,null,null,null,null];(statearr_21714[0] = state_machine__6921__auto__);
(statearr_21714[1] = 1);
return statearr_21714;
});
var state_machine__6921__auto____1 = (function (state_21697){while(true){
var ret_value__6922__auto__ = (function (){try{while(true){
var result__6923__auto__ = switch__6920__auto__.call(null,state_21697);if(cljs.core.keyword_identical_QMARK_.call(null,result__6923__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6923__auto__;
}
break;
}
}catch (e21715){if((e21715 instanceof Object))
{var ex__6924__auto__ = e21715;var statearr_21716_21728 = state_21697;(statearr_21716_21728[5] = ex__6924__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21697);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21715;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6922__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21729 = state_21697;
state_21697 = G__21729;
continue;
}
} else
{return ret_value__6922__auto__;
}
break;
}
});
state_machine__6921__auto__ = function(state_21697){
switch(arguments.length){
case 0:
return state_machine__6921__auto____0.call(this);
case 1:
return state_machine__6921__auto____1.call(this,state_21697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6921__auto____0;
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6921__auto____1;
return state_machine__6921__auto__;
})()
;})(switch__6920__auto__,c__6984__auto__))
})();var state__6986__auto__ = (function (){var statearr_21717 = f__6985__auto__.call(null);(statearr_21717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6984__auto__);
return statearr_21717;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6986__auto__);
});})(c__6984__auto__))
);
return c__6984__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj21731 = {};return obj21731;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3466__auto__ = _;if(and__3466__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4105__auto__ = (((_ == null))?null:_);return (function (){var or__3478__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj21733 = {};return obj21733;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21957 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21957 = (function (cs,ch,mult,meta21958){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21958 = meta21958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21957.cljs$lang$type = true;
cljs.core.async.t21957.cljs$lang$ctorStr = "cljs.core.async/t21957";
cljs.core.async.t21957.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t21957");
});})(cs))
;
cljs.core.async.t21957.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21957.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21957.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21957.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21957.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21957.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21957.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21959){var self__ = this;
var _21959__$1 = this;return self__.meta21958;
});})(cs))
;
cljs.core.async.t21957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21959,meta21958__$1){var self__ = this;
var _21959__$1 = this;return (new cljs.core.async.t21957(self__.cs,self__.ch,self__.mult,meta21958__$1));
});})(cs))
;
cljs.core.async.__GT_t21957 = ((function (cs){
return (function __GT_t21957(cs__$1,ch__$1,mult__$1,meta21958){return (new cljs.core.async.t21957(cs__$1,ch__$1,mult__$1,meta21958));
});})(cs))
;
}
return (new cljs.core.async.t21957(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6984__auto___22180 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6984__auto___22180,cs,m,dchan,dctr,done){
return (function (){var f__6985__auto__ = (function (){var switch__6920__auto__ = ((function (c__6984__auto___22180,cs,m,dchan,dctr,done){
return (function (state_22094){var state_val_22095 = (state_22094[1]);if((state_val_22095 === 7))
{var inst_22090 = (state_22094[2]);var state_22094__$1 = state_22094;var statearr_22096_22181 = state_22094__$1;(statearr_22096_22181[2] = inst_22090);
(statearr_22096_22181[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 20))
{var inst_21991 = (state_22094[7]);var inst_22001 = cljs.core.first.call(null,inst_21991);var inst_22002 = cljs.core.nth.call(null,inst_22001,0,null);var inst_22003 = cljs.core.nth.call(null,inst_22001,1,null);var state_22094__$1 = (function (){var statearr_22097 = state_22094;(statearr_22097[8] = inst_22002);
return statearr_22097;
})();if(cljs.core.truth_(inst_22003))
{var statearr_22098_22182 = state_22094__$1;(statearr_22098_22182[1] = 22);
} else
{var statearr_22099_22183 = state_22094__$1;(statearr_22099_22183[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 27))
{var inst_22033 = (state_22094[9]);var inst_22031 = (state_22094[10]);var inst_22038 = cljs.core._nth.call(null,inst_22031,inst_22033);var state_22094__$1 = (function (){var statearr_22100 = state_22094;(statearr_22100[11] = inst_22038);
return statearr_22100;
})();var statearr_22101_22184 = state_22094__$1;(statearr_22101_22184[2] = null);
(statearr_22101_22184[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 1))
{var state_22094__$1 = state_22094;var statearr_22102_22185 = state_22094__$1;(statearr_22102_22185[2] = null);
(statearr_22102_22185[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 24))
{var inst_21991 = (state_22094[7]);var inst_22008 = (state_22094[2]);var inst_22009 = cljs.core.next.call(null,inst_21991);var inst_21971 = inst_22009;var inst_21972 = null;var inst_21973 = 0;var inst_21974 = 0;var state_22094__$1 = (function (){var statearr_22103 = state_22094;(statearr_22103[12] = inst_21973);
(statearr_22103[13] = inst_21971);
(statearr_22103[14] = inst_22008);
(statearr_22103[15] = inst_21974);
(statearr_22103[16] = inst_21972);
return statearr_22103;
})();var statearr_22104_22186 = state_22094__$1;(statearr_22104_22186[2] = null);
(statearr_22104_22186[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 39))
{var inst_22051 = (state_22094[17]);var inst_22069 = (state_22094[2]);var inst_22070 = cljs.core.next.call(null,inst_22051);var inst_22030 = inst_22070;var inst_22031 = null;var inst_22032 = 0;var inst_22033 = 0;var state_22094__$1 = (function (){var statearr_22108 = state_22094;(statearr_22108[9] = inst_22033);
(statearr_22108[18] = inst_22030);
(statearr_22108[19] = inst_22032);
(statearr_22108[20] = inst_22069);
(statearr_22108[10] = inst_22031);
return statearr_22108;
})();var statearr_22109_22187 = state_22094__$1;(statearr_22109_22187[2] = null);
(statearr_22109_22187[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 4))
{var inst_21962 = (state_22094[21]);var inst_21962__$1 = (state_22094[2]);var inst_21963 = (inst_21962__$1 == null);var state_22094__$1 = (function (){var statearr_22110 = state_22094;(statearr_22110[21] = inst_21962__$1);
return statearr_22110;
})();if(cljs.core.truth_(inst_21963))
{var statearr_22111_22188 = state_22094__$1;(statearr_22111_22188[1] = 5);
} else
{var statearr_22112_22189 = state_22094__$1;(statearr_22112_22189[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 15))
{var inst_21973 = (state_22094[12]);var inst_21971 = (state_22094[13]);var inst_21974 = (state_22094[15]);var inst_21972 = (state_22094[16]);var inst_21987 = (state_22094[2]);var inst_21988 = (inst_21974 + 1);var tmp22105 = inst_21973;var tmp22106 = inst_21971;var tmp22107 = inst_21972;var inst_21971__$1 = tmp22106;var inst_21972__$1 = tmp22107;var inst_21973__$1 = tmp22105;var inst_21974__$1 = inst_21988;var state_22094__$1 = (function (){var statearr_22113 = state_22094;(statearr_22113[12] = inst_21973__$1);
(statearr_22113[13] = inst_21971__$1);
(statearr_22113[15] = inst_21974__$1);
(statearr_22113[22] = inst_21987);
(statearr_22113[16] = inst_21972__$1);
return statearr_22113;
})();var statearr_22114_22190 = state_22094__$1;(statearr_22114_22190[2] = null);
(statearr_22114_22190[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 21))
{var inst_22012 = (state_22094[2]);var state_22094__$1 = state_22094;var statearr_22115_22191 = state_22094__$1;(statearr_22115_22191[2] = inst_22012);
(statearr_22115_22191[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 31))
{var inst_22038 = (state_22094[11]);var inst_22039 = (state_22094[2]);var inst_22040 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22041 = cljs.core.async.untap_STAR_.call(null,m,inst_22038);var state_22094__$1 = (function (){var statearr_22116 = state_22094;(statearr_22116[23] = inst_22040);
(statearr_22116[24] = inst_22039);
return statearr_22116;
})();var statearr_22117_22192 = state_22094__$1;(statearr_22117_22192[2] = inst_22041);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22094__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 32))
{var inst_21962 = (state_22094[21]);var inst_22038 = (state_22094[11]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22094,31,Object,null,30);var inst_22045 = cljs.core.async.put_BANG_.call(null,inst_22038,inst_21962,done);var state_22094__$1 = state_22094;var statearr_22118_22193 = state_22094__$1;(statearr_22118_22193[2] = inst_22045);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22094__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 40))
{var inst_22060 = (state_22094[25]);var inst_22061 = (state_22094[2]);var inst_22062 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22063 = cljs.core.async.untap_STAR_.call(null,m,inst_22060);var state_22094__$1 = (function (){var statearr_22119 = state_22094;(statearr_22119[26] = inst_22061);
(statearr_22119[27] = inst_22062);
return statearr_22119;
})();var statearr_22120_22194 = state_22094__$1;(statearr_22120_22194[2] = inst_22063);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22094__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 33))
{var inst_22051 = (state_22094[17]);var inst_22053 = cljs.core.chunked_seq_QMARK_.call(null,inst_22051);var state_22094__$1 = state_22094;if(inst_22053)
{var statearr_22121_22195 = state_22094__$1;(statearr_22121_22195[1] = 36);
} else
{var statearr_22122_22196 = state_22094__$1;(statearr_22122_22196[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 13))
{var inst_21981 = (state_22094[28]);var inst_21984 = cljs.core.async.close_BANG_.call(null,inst_21981);var state_22094__$1 = state_22094;var statearr_22123_22197 = state_22094__$1;(statearr_22123_22197[2] = inst_21984);
(statearr_22123_22197[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 22))
{var inst_22002 = (state_22094[8]);var inst_22005 = cljs.core.async.close_BANG_.call(null,inst_22002);var state_22094__$1 = state_22094;var statearr_22124_22198 = state_22094__$1;(statearr_22124_22198[2] = inst_22005);
(statearr_22124_22198[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 36))
{var inst_22051 = (state_22094[17]);var inst_22055 = cljs.core.chunk_first.call(null,inst_22051);var inst_22056 = cljs.core.chunk_rest.call(null,inst_22051);var inst_22057 = cljs.core.count.call(null,inst_22055);var inst_22030 = inst_22056;var inst_22031 = inst_22055;var inst_22032 = inst_22057;var inst_22033 = 0;var state_22094__$1 = (function (){var statearr_22125 = state_22094;(statearr_22125[9] = inst_22033);
(statearr_22125[18] = inst_22030);
(statearr_22125[19] = inst_22032);
(statearr_22125[10] = inst_22031);
return statearr_22125;
})();var statearr_22126_22199 = state_22094__$1;(statearr_22126_22199[2] = null);
(statearr_22126_22199[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 41))
{var inst_21962 = (state_22094[21]);var inst_22060 = (state_22094[25]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22094,40,Object,null,39);var inst_22067 = cljs.core.async.put_BANG_.call(null,inst_22060,inst_21962,done);var state_22094__$1 = state_22094;var statearr_22127_22200 = state_22094__$1;(statearr_22127_22200[2] = inst_22067);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22094__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 43))
{var state_22094__$1 = state_22094;var statearr_22128_22201 = state_22094__$1;(statearr_22128_22201[2] = null);
(statearr_22128_22201[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 29))
{var inst_22078 = (state_22094[2]);var state_22094__$1 = state_22094;var statearr_22129_22202 = state_22094__$1;(statearr_22129_22202[2] = inst_22078);
(statearr_22129_22202[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 44))
{var inst_22087 = (state_22094[2]);var state_22094__$1 = (function (){var statearr_22130 = state_22094;(statearr_22130[29] = inst_22087);
return statearr_22130;
})();var statearr_22131_22203 = state_22094__$1;(statearr_22131_22203[2] = null);
(statearr_22131_22203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 6))
{var inst_22022 = (state_22094[30]);var inst_22021 = cljs.core.deref.call(null,cs);var inst_22022__$1 = cljs.core.keys.call(null,inst_22021);var inst_22023 = cljs.core.count.call(null,inst_22022__$1);var inst_22024 = cljs.core.reset_BANG_.call(null,dctr,inst_22023);var inst_22029 = cljs.core.seq.call(null,inst_22022__$1);var inst_22030 = inst_22029;var inst_22031 = null;var inst_22032 = 0;var inst_22033 = 0;var state_22094__$1 = (function (){var statearr_22132 = state_22094;(statearr_22132[9] = inst_22033);
(statearr_22132[18] = inst_22030);
(statearr_22132[31] = inst_22024);
(statearr_22132[19] = inst_22032);
(statearr_22132[30] = inst_22022__$1);
(statearr_22132[10] = inst_22031);
return statearr_22132;
})();var statearr_22133_22204 = state_22094__$1;(statearr_22133_22204[2] = null);
(statearr_22133_22204[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 28))
{var inst_22030 = (state_22094[18]);var inst_22051 = (state_22094[17]);var inst_22051__$1 = cljs.core.seq.call(null,inst_22030);var state_22094__$1 = (function (){var statearr_22134 = state_22094;(statearr_22134[17] = inst_22051__$1);
return statearr_22134;
})();if(inst_22051__$1)
{var statearr_22135_22205 = state_22094__$1;(statearr_22135_22205[1] = 33);
} else
{var statearr_22136_22206 = state_22094__$1;(statearr_22136_22206[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 25))
{var inst_22033 = (state_22094[9]);var inst_22032 = (state_22094[19]);var inst_22035 = (inst_22033 < inst_22032);var inst_22036 = inst_22035;var state_22094__$1 = state_22094;if(cljs.core.truth_(inst_22036))
{var statearr_22137_22207 = state_22094__$1;(statearr_22137_22207[1] = 27);
} else
{var statearr_22138_22208 = state_22094__$1;(statearr_22138_22208[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 34))
{var state_22094__$1 = state_22094;var statearr_22139_22209 = state_22094__$1;(statearr_22139_22209[2] = null);
(statearr_22139_22209[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 17))
{var state_22094__$1 = state_22094;var statearr_22140_22210 = state_22094__$1;(statearr_22140_22210[2] = null);
(statearr_22140_22210[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 3))
{var inst_22092 = (state_22094[2]);var state_22094__$1 = state_22094;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22094__$1,inst_22092);
} else
{if((state_val_22095 === 12))
{var inst_22017 = (state_22094[2]);var state_22094__$1 = state_22094;var statearr_22141_22211 = state_22094__$1;(statearr_22141_22211[2] = inst_22017);
(statearr_22141_22211[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 2))
{var state_22094__$1 = state_22094;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22094__$1,4,ch);
} else
{if((state_val_22095 === 23))
{var state_22094__$1 = state_22094;var statearr_22142_22212 = state_22094__$1;(statearr_22142_22212[2] = null);
(statearr_22142_22212[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 35))
{var inst_22076 = (state_22094[2]);var state_22094__$1 = state_22094;var statearr_22143_22213 = state_22094__$1;(statearr_22143_22213[2] = inst_22076);
(statearr_22143_22213[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 19))
{var inst_21991 = (state_22094[7]);var inst_21995 = cljs.core.chunk_first.call(null,inst_21991);var inst_21996 = cljs.core.chunk_rest.call(null,inst_21991);var inst_21997 = cljs.core.count.call(null,inst_21995);var inst_21971 = inst_21996;var inst_21972 = inst_21995;var inst_21973 = inst_21997;var inst_21974 = 0;var state_22094__$1 = (function (){var statearr_22144 = state_22094;(statearr_22144[12] = inst_21973);
(statearr_22144[13] = inst_21971);
(statearr_22144[15] = inst_21974);
(statearr_22144[16] = inst_21972);
return statearr_22144;
})();var statearr_22145_22214 = state_22094__$1;(statearr_22145_22214[2] = null);
(statearr_22145_22214[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 11))
{var inst_21991 = (state_22094[7]);var inst_21971 = (state_22094[13]);var inst_21991__$1 = cljs.core.seq.call(null,inst_21971);var state_22094__$1 = (function (){var statearr_22146 = state_22094;(statearr_22146[7] = inst_21991__$1);
return statearr_22146;
})();if(inst_21991__$1)
{var statearr_22147_22215 = state_22094__$1;(statearr_22147_22215[1] = 16);
} else
{var statearr_22148_22216 = state_22094__$1;(statearr_22148_22216[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 9))
{var inst_22019 = (state_22094[2]);var state_22094__$1 = state_22094;var statearr_22149_22217 = state_22094__$1;(statearr_22149_22217[2] = inst_22019);
(statearr_22149_22217[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 5))
{var inst_21969 = cljs.core.deref.call(null,cs);var inst_21970 = cljs.core.seq.call(null,inst_21969);var inst_21971 = inst_21970;var inst_21972 = null;var inst_21973 = 0;var inst_21974 = 0;var state_22094__$1 = (function (){var statearr_22150 = state_22094;(statearr_22150[12] = inst_21973);
(statearr_22150[13] = inst_21971);
(statearr_22150[15] = inst_21974);
(statearr_22150[16] = inst_21972);
return statearr_22150;
})();var statearr_22151_22218 = state_22094__$1;(statearr_22151_22218[2] = null);
(statearr_22151_22218[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 14))
{var state_22094__$1 = state_22094;var statearr_22152_22219 = state_22094__$1;(statearr_22152_22219[2] = null);
(statearr_22152_22219[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 45))
{var inst_22084 = (state_22094[2]);var state_22094__$1 = state_22094;var statearr_22153_22220 = state_22094__$1;(statearr_22153_22220[2] = inst_22084);
(statearr_22153_22220[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 26))
{var inst_22022 = (state_22094[30]);var inst_22080 = (state_22094[2]);var inst_22081 = cljs.core.seq.call(null,inst_22022);var state_22094__$1 = (function (){var statearr_22154 = state_22094;(statearr_22154[32] = inst_22080);
return statearr_22154;
})();if(inst_22081)
{var statearr_22155_22221 = state_22094__$1;(statearr_22155_22221[1] = 42);
} else
{var statearr_22156_22222 = state_22094__$1;(statearr_22156_22222[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 16))
{var inst_21991 = (state_22094[7]);var inst_21993 = cljs.core.chunked_seq_QMARK_.call(null,inst_21991);var state_22094__$1 = state_22094;if(inst_21993)
{var statearr_22160_22223 = state_22094__$1;(statearr_22160_22223[1] = 19);
} else
{var statearr_22161_22224 = state_22094__$1;(statearr_22161_22224[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 38))
{var inst_22073 = (state_22094[2]);var state_22094__$1 = state_22094;var statearr_22162_22225 = state_22094__$1;(statearr_22162_22225[2] = inst_22073);
(statearr_22162_22225[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 30))
{var inst_22033 = (state_22094[9]);var inst_22030 = (state_22094[18]);var inst_22032 = (state_22094[19]);var inst_22031 = (state_22094[10]);var inst_22047 = (state_22094[2]);var inst_22048 = (inst_22033 + 1);var tmp22157 = inst_22030;var tmp22158 = inst_22032;var tmp22159 = inst_22031;var inst_22030__$1 = tmp22157;var inst_22031__$1 = tmp22159;var inst_22032__$1 = tmp22158;var inst_22033__$1 = inst_22048;var state_22094__$1 = (function (){var statearr_22163 = state_22094;(statearr_22163[9] = inst_22033__$1);
(statearr_22163[18] = inst_22030__$1);
(statearr_22163[19] = inst_22032__$1);
(statearr_22163[33] = inst_22047);
(statearr_22163[10] = inst_22031__$1);
return statearr_22163;
})();var statearr_22164_22226 = state_22094__$1;(statearr_22164_22226[2] = null);
(statearr_22164_22226[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 10))
{var inst_21974 = (state_22094[15]);var inst_21972 = (state_22094[16]);var inst_21980 = cljs.core._nth.call(null,inst_21972,inst_21974);var inst_21981 = cljs.core.nth.call(null,inst_21980,0,null);var inst_21982 = cljs.core.nth.call(null,inst_21980,1,null);var state_22094__$1 = (function (){var statearr_22165 = state_22094;(statearr_22165[28] = inst_21981);
return statearr_22165;
})();if(cljs.core.truth_(inst_21982))
{var statearr_22166_22227 = state_22094__$1;(statearr_22166_22227[1] = 13);
} else
{var statearr_22167_22228 = state_22094__$1;(statearr_22167_22228[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 18))
{var inst_22015 = (state_22094[2]);var state_22094__$1 = state_22094;var statearr_22168_22229 = state_22094__$1;(statearr_22168_22229[2] = inst_22015);
(statearr_22168_22229[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 42))
{var state_22094__$1 = state_22094;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22094__$1,45,dchan);
} else
{if((state_val_22095 === 37))
{var inst_22051 = (state_22094[17]);var inst_22060 = cljs.core.first.call(null,inst_22051);var state_22094__$1 = (function (){var statearr_22169 = state_22094;(statearr_22169[25] = inst_22060);
return statearr_22169;
})();var statearr_22170_22230 = state_22094__$1;(statearr_22170_22230[2] = null);
(statearr_22170_22230[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22095 === 8))
{var inst_21973 = (state_22094[12]);var inst_21974 = (state_22094[15]);var inst_21976 = (inst_21974 < inst_21973);var inst_21977 = inst_21976;var state_22094__$1 = state_22094;if(cljs.core.truth_(inst_21977))
{var statearr_22171_22231 = state_22094__$1;(statearr_22171_22231[1] = 10);
} else
{var statearr_22172_22232 = state_22094__$1;(statearr_22172_22232[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6984__auto___22180,cs,m,dchan,dctr,done))
;return ((function (switch__6920__auto__,c__6984__auto___22180,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6921__auto__ = null;
var state_machine__6921__auto____0 = (function (){var statearr_22176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22176[0] = state_machine__6921__auto__);
(statearr_22176[1] = 1);
return statearr_22176;
});
var state_machine__6921__auto____1 = (function (state_22094){while(true){
var ret_value__6922__auto__ = (function (){try{while(true){
var result__6923__auto__ = switch__6920__auto__.call(null,state_22094);if(cljs.core.keyword_identical_QMARK_.call(null,result__6923__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6923__auto__;
}
break;
}
}catch (e22177){if((e22177 instanceof Object))
{var ex__6924__auto__ = e22177;var statearr_22178_22233 = state_22094;(statearr_22178_22233[5] = ex__6924__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22094);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22177;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6922__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22234 = state_22094;
state_22094 = G__22234;
continue;
}
} else
{return ret_value__6922__auto__;
}
break;
}
});
state_machine__6921__auto__ = function(state_22094){
switch(arguments.length){
case 0:
return state_machine__6921__auto____0.call(this);
case 1:
return state_machine__6921__auto____1.call(this,state_22094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6921__auto____0;
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6921__auto____1;
return state_machine__6921__auto__;
})()
;})(switch__6920__auto__,c__6984__auto___22180,cs,m,dchan,dctr,done))
})();var state__6986__auto__ = (function (){var statearr_22179 = f__6985__auto__.call(null);(statearr_22179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6984__auto___22180);
return statearr_22179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6986__auto__);
});})(c__6984__auto___22180,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj22236 = {};return obj22236;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t22346 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22346 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22347){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22347 = meta22347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22346.cljs$lang$type = true;
cljs.core.async.t22346.cljs$lang$ctorStr = "cljs.core.async/t22346";
cljs.core.async.t22346.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t22346");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22346.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22346.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22346.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22346.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22346.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22346.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22346.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22348){var self__ = this;
var _22348__$1 = this;return self__.meta22347;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22348,meta22347__$1){var self__ = this;
var _22348__$1 = this;return (new cljs.core.async.t22346(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22347__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22346 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22346(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22347){return (new cljs.core.async.t22346(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22347));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22346(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6984__auto___22455 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6984__auto___22455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6985__auto__ = (function (){var switch__6920__auto__ = ((function (c__6984__auto___22455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22413){var state_val_22414 = (state_22413[1]);if((state_val_22414 === 7))
{var inst_22362 = (state_22413[7]);var inst_22367 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22362);var state_22413__$1 = state_22413;var statearr_22415_22456 = state_22413__$1;(statearr_22415_22456[2] = inst_22367);
(statearr_22415_22456[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 20))
{var inst_22377 = (state_22413[8]);var state_22413__$1 = state_22413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22413__$1,23,out,inst_22377);
} else
{if((state_val_22414 === 1))
{var inst_22352 = (state_22413[9]);var inst_22352__$1 = calc_state.call(null);var inst_22353 = cljs.core.seq_QMARK_.call(null,inst_22352__$1);var state_22413__$1 = (function (){var statearr_22416 = state_22413;(statearr_22416[9] = inst_22352__$1);
return statearr_22416;
})();if(inst_22353)
{var statearr_22417_22457 = state_22413__$1;(statearr_22417_22457[1] = 2);
} else
{var statearr_22418_22458 = state_22413__$1;(statearr_22418_22458[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 4))
{var inst_22352 = (state_22413[9]);var inst_22358 = (state_22413[2]);var inst_22359 = cljs.core.get.call(null,inst_22358,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22360 = cljs.core.get.call(null,inst_22358,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22361 = cljs.core.get.call(null,inst_22358,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_22362 = inst_22352;var state_22413__$1 = (function (){var statearr_22419 = state_22413;(statearr_22419[10] = inst_22361);
(statearr_22419[7] = inst_22362);
(statearr_22419[11] = inst_22359);
(statearr_22419[12] = inst_22360);
return statearr_22419;
})();var statearr_22420_22459 = state_22413__$1;(statearr_22420_22459[2] = null);
(statearr_22420_22459[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 15))
{var state_22413__$1 = state_22413;var statearr_22421_22460 = state_22413__$1;(statearr_22421_22460[2] = null);
(statearr_22421_22460[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 21))
{var state_22413__$1 = state_22413;var statearr_22422_22461 = state_22413__$1;(statearr_22422_22461[2] = null);
(statearr_22422_22461[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 13))
{var inst_22409 = (state_22413[2]);var state_22413__$1 = state_22413;var statearr_22423_22462 = state_22413__$1;(statearr_22423_22462[2] = inst_22409);
(statearr_22423_22462[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 22))
{var inst_22370 = (state_22413[13]);var inst_22406 = (state_22413[2]);var inst_22362 = inst_22370;var state_22413__$1 = (function (){var statearr_22424 = state_22413;(statearr_22424[14] = inst_22406);
(statearr_22424[7] = inst_22362);
return statearr_22424;
})();var statearr_22425_22463 = state_22413__$1;(statearr_22425_22463[2] = null);
(statearr_22425_22463[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 6))
{var inst_22411 = (state_22413[2]);var state_22413__$1 = state_22413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22413__$1,inst_22411);
} else
{if((state_val_22414 === 17))
{var inst_22392 = (state_22413[15]);var state_22413__$1 = state_22413;var statearr_22426_22464 = state_22413__$1;(statearr_22426_22464[2] = inst_22392);
(statearr_22426_22464[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 3))
{var inst_22352 = (state_22413[9]);var state_22413__$1 = state_22413;var statearr_22427_22465 = state_22413__$1;(statearr_22427_22465[2] = inst_22352);
(statearr_22427_22465[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 12))
{var inst_22392 = (state_22413[15]);var inst_22373 = (state_22413[16]);var inst_22378 = (state_22413[17]);var inst_22392__$1 = inst_22373.call(null,inst_22378);var state_22413__$1 = (function (){var statearr_22428 = state_22413;(statearr_22428[15] = inst_22392__$1);
return statearr_22428;
})();if(cljs.core.truth_(inst_22392__$1))
{var statearr_22429_22466 = state_22413__$1;(statearr_22429_22466[1] = 17);
} else
{var statearr_22430_22467 = state_22413__$1;(statearr_22430_22467[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 2))
{var inst_22352 = (state_22413[9]);var inst_22355 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22352);var state_22413__$1 = state_22413;var statearr_22431_22468 = state_22413__$1;(statearr_22431_22468[2] = inst_22355);
(statearr_22431_22468[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 23))
{var inst_22403 = (state_22413[2]);var state_22413__$1 = state_22413;var statearr_22432_22469 = state_22413__$1;(statearr_22432_22469[2] = inst_22403);
(statearr_22432_22469[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 19))
{var inst_22400 = (state_22413[2]);var state_22413__$1 = state_22413;if(cljs.core.truth_(inst_22400))
{var statearr_22433_22470 = state_22413__$1;(statearr_22433_22470[1] = 20);
} else
{var statearr_22434_22471 = state_22413__$1;(statearr_22434_22471[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 11))
{var inst_22377 = (state_22413[8]);var inst_22383 = (inst_22377 == null);var state_22413__$1 = state_22413;if(cljs.core.truth_(inst_22383))
{var statearr_22435_22472 = state_22413__$1;(statearr_22435_22472[1] = 14);
} else
{var statearr_22436_22473 = state_22413__$1;(statearr_22436_22473[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 9))
{var inst_22370 = (state_22413[13]);var inst_22370__$1 = (state_22413[2]);var inst_22371 = cljs.core.get.call(null,inst_22370__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22372 = cljs.core.get.call(null,inst_22370__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22373 = cljs.core.get.call(null,inst_22370__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_22413__$1 = (function (){var statearr_22437 = state_22413;(statearr_22437[16] = inst_22373);
(statearr_22437[18] = inst_22372);
(statearr_22437[13] = inst_22370__$1);
return statearr_22437;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22413__$1,10,inst_22371);
} else
{if((state_val_22414 === 5))
{var inst_22362 = (state_22413[7]);var inst_22365 = cljs.core.seq_QMARK_.call(null,inst_22362);var state_22413__$1 = state_22413;if(inst_22365)
{var statearr_22438_22474 = state_22413__$1;(statearr_22438_22474[1] = 7);
} else
{var statearr_22439_22475 = state_22413__$1;(statearr_22439_22475[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 14))
{var inst_22378 = (state_22413[17]);var inst_22385 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22378);var state_22413__$1 = state_22413;var statearr_22440_22476 = state_22413__$1;(statearr_22440_22476[2] = inst_22385);
(statearr_22440_22476[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 16))
{var inst_22388 = (state_22413[2]);var inst_22389 = calc_state.call(null);var inst_22362 = inst_22389;var state_22413__$1 = (function (){var statearr_22441 = state_22413;(statearr_22441[19] = inst_22388);
(statearr_22441[7] = inst_22362);
return statearr_22441;
})();var statearr_22442_22477 = state_22413__$1;(statearr_22442_22477[2] = null);
(statearr_22442_22477[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 10))
{var inst_22377 = (state_22413[8]);var inst_22378 = (state_22413[17]);var inst_22376 = (state_22413[2]);var inst_22377__$1 = cljs.core.nth.call(null,inst_22376,0,null);var inst_22378__$1 = cljs.core.nth.call(null,inst_22376,1,null);var inst_22379 = (inst_22377__$1 == null);var inst_22380 = cljs.core._EQ_.call(null,inst_22378__$1,change);var inst_22381 = (inst_22379) || (inst_22380);var state_22413__$1 = (function (){var statearr_22443 = state_22413;(statearr_22443[8] = inst_22377__$1);
(statearr_22443[17] = inst_22378__$1);
return statearr_22443;
})();if(cljs.core.truth_(inst_22381))
{var statearr_22444_22478 = state_22413__$1;(statearr_22444_22478[1] = 11);
} else
{var statearr_22445_22479 = state_22413__$1;(statearr_22445_22479[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 18))
{var inst_22373 = (state_22413[16]);var inst_22372 = (state_22413[18]);var inst_22378 = (state_22413[17]);var inst_22395 = cljs.core.empty_QMARK_.call(null,inst_22373);var inst_22396 = inst_22372.call(null,inst_22378);var inst_22397 = cljs.core.not.call(null,inst_22396);var inst_22398 = (inst_22395) && (inst_22397);var state_22413__$1 = state_22413;var statearr_22446_22480 = state_22413__$1;(statearr_22446_22480[2] = inst_22398);
(statearr_22446_22480[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22414 === 8))
{var inst_22362 = (state_22413[7]);var state_22413__$1 = state_22413;var statearr_22447_22481 = state_22413__$1;(statearr_22447_22481[2] = inst_22362);
(statearr_22447_22481[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6984__auto___22455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6920__auto__,c__6984__auto___22455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6921__auto__ = null;
var state_machine__6921__auto____0 = (function (){var statearr_22451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22451[0] = state_machine__6921__auto__);
(statearr_22451[1] = 1);
return statearr_22451;
});
var state_machine__6921__auto____1 = (function (state_22413){while(true){
var ret_value__6922__auto__ = (function (){try{while(true){
var result__6923__auto__ = switch__6920__auto__.call(null,state_22413);if(cljs.core.keyword_identical_QMARK_.call(null,result__6923__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6923__auto__;
}
break;
}
}catch (e22452){if((e22452 instanceof Object))
{var ex__6924__auto__ = e22452;var statearr_22453_22482 = state_22413;(statearr_22453_22482[5] = ex__6924__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22413);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6922__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22483 = state_22413;
state_22413 = G__22483;
continue;
}
} else
{return ret_value__6922__auto__;
}
break;
}
});
state_machine__6921__auto__ = function(state_22413){
switch(arguments.length){
case 0:
return state_machine__6921__auto____0.call(this);
case 1:
return state_machine__6921__auto____1.call(this,state_22413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6921__auto____0;
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6921__auto____1;
return state_machine__6921__auto__;
})()
;})(switch__6920__auto__,c__6984__auto___22455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6986__auto__ = (function (){var statearr_22454 = f__6985__auto__.call(null);(statearr_22454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6984__auto___22455);
return statearr_22454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6986__auto__);
});})(c__6984__auto___22455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj22485 = {};return obj22485;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3478__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3478__auto__,mults){
return (function (p1__22486_SHARP_){if(cljs.core.truth_(p1__22486_SHARP_.call(null,topic)))
{return p1__22486_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__22486_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3478__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22611 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22611 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22612){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22612 = meta22612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22611.cljs$lang$type = true;
cljs.core.async.t22611.cljs$lang$ctorStr = "cljs.core.async/t22611";
cljs.core.async.t22611.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t22611");
});})(mults,ensure_mult))
;
cljs.core.async.t22611.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22611.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22611.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22611.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22611.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22611.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22611.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22613){var self__ = this;
var _22613__$1 = this;return self__.meta22612;
});})(mults,ensure_mult))
;
cljs.core.async.t22611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22613,meta22612__$1){var self__ = this;
var _22613__$1 = this;return (new cljs.core.async.t22611(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22612__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22611 = ((function (mults,ensure_mult){
return (function __GT_t22611(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22612){return (new cljs.core.async.t22611(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22612));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22611(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6984__auto___22735 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6984__auto___22735,mults,ensure_mult,p){
return (function (){var f__6985__auto__ = (function (){var switch__6920__auto__ = ((function (c__6984__auto___22735,mults,ensure_mult,p){
return (function (state_22687){var state_val_22688 = (state_22687[1]);if((state_val_22688 === 7))
{var inst_22683 = (state_22687[2]);var state_22687__$1 = state_22687;var statearr_22689_22736 = state_22687__$1;(statearr_22689_22736[2] = inst_22683);
(statearr_22689_22736[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 20))
{var state_22687__$1 = state_22687;var statearr_22690_22737 = state_22687__$1;(statearr_22690_22737[2] = null);
(statearr_22690_22737[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 1))
{var state_22687__$1 = state_22687;var statearr_22691_22738 = state_22687__$1;(statearr_22691_22738[2] = null);
(statearr_22691_22738[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 24))
{var inst_22616 = (state_22687[7]);var inst_22666 = (state_22687[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22687,23,Object,null,22);var inst_22673 = cljs.core.async.muxch_STAR_.call(null,inst_22666);var state_22687__$1 = state_22687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22687__$1,25,inst_22673,inst_22616);
} else
{if((state_val_22688 === 4))
{var inst_22616 = (state_22687[7]);var inst_22616__$1 = (state_22687[2]);var inst_22617 = (inst_22616__$1 == null);var state_22687__$1 = (function (){var statearr_22692 = state_22687;(statearr_22692[7] = inst_22616__$1);
return statearr_22692;
})();if(cljs.core.truth_(inst_22617))
{var statearr_22693_22739 = state_22687__$1;(statearr_22693_22739[1] = 5);
} else
{var statearr_22694_22740 = state_22687__$1;(statearr_22694_22740[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 15))
{var inst_22658 = (state_22687[2]);var state_22687__$1 = state_22687;var statearr_22695_22741 = state_22687__$1;(statearr_22695_22741[2] = inst_22658);
(statearr_22695_22741[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 21))
{var inst_22680 = (state_22687[2]);var state_22687__$1 = (function (){var statearr_22696 = state_22687;(statearr_22696[9] = inst_22680);
return statearr_22696;
})();var statearr_22697_22742 = state_22687__$1;(statearr_22697_22742[2] = null);
(statearr_22697_22742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 13))
{var inst_22640 = (state_22687[10]);var inst_22642 = cljs.core.chunked_seq_QMARK_.call(null,inst_22640);var state_22687__$1 = state_22687;if(inst_22642)
{var statearr_22698_22743 = state_22687__$1;(statearr_22698_22743[1] = 16);
} else
{var statearr_22699_22744 = state_22687__$1;(statearr_22699_22744[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 22))
{var inst_22677 = (state_22687[2]);var state_22687__$1 = state_22687;var statearr_22700_22745 = state_22687__$1;(statearr_22700_22745[2] = inst_22677);
(statearr_22700_22745[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 6))
{var inst_22616 = (state_22687[7]);var inst_22664 = (state_22687[11]);var inst_22666 = (state_22687[8]);var inst_22664__$1 = topic_fn.call(null,inst_22616);var inst_22665 = cljs.core.deref.call(null,mults);var inst_22666__$1 = cljs.core.get.call(null,inst_22665,inst_22664__$1);var state_22687__$1 = (function (){var statearr_22701 = state_22687;(statearr_22701[11] = inst_22664__$1);
(statearr_22701[8] = inst_22666__$1);
return statearr_22701;
})();if(cljs.core.truth_(inst_22666__$1))
{var statearr_22702_22746 = state_22687__$1;(statearr_22702_22746[1] = 19);
} else
{var statearr_22703_22747 = state_22687__$1;(statearr_22703_22747[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 25))
{var inst_22675 = (state_22687[2]);var state_22687__$1 = state_22687;var statearr_22704_22748 = state_22687__$1;(statearr_22704_22748[2] = inst_22675);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22687__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 17))
{var inst_22640 = (state_22687[10]);var inst_22649 = cljs.core.first.call(null,inst_22640);var inst_22650 = cljs.core.async.muxch_STAR_.call(null,inst_22649);var inst_22651 = cljs.core.async.close_BANG_.call(null,inst_22650);var inst_22652 = cljs.core.next.call(null,inst_22640);var inst_22626 = inst_22652;var inst_22627 = null;var inst_22628 = 0;var inst_22629 = 0;var state_22687__$1 = (function (){var statearr_22705 = state_22687;(statearr_22705[12] = inst_22629);
(statearr_22705[13] = inst_22626);
(statearr_22705[14] = inst_22627);
(statearr_22705[15] = inst_22651);
(statearr_22705[16] = inst_22628);
return statearr_22705;
})();var statearr_22706_22749 = state_22687__$1;(statearr_22706_22749[2] = null);
(statearr_22706_22749[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 3))
{var inst_22685 = (state_22687[2]);var state_22687__$1 = state_22687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22687__$1,inst_22685);
} else
{if((state_val_22688 === 12))
{var inst_22660 = (state_22687[2]);var state_22687__$1 = state_22687;var statearr_22707_22750 = state_22687__$1;(statearr_22707_22750[2] = inst_22660);
(statearr_22707_22750[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 2))
{var state_22687__$1 = state_22687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22687__$1,4,ch);
} else
{if((state_val_22688 === 23))
{var inst_22664 = (state_22687[11]);var inst_22668 = (state_22687[2]);var inst_22669 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22664);var state_22687__$1 = (function (){var statearr_22708 = state_22687;(statearr_22708[17] = inst_22668);
return statearr_22708;
})();var statearr_22709_22751 = state_22687__$1;(statearr_22709_22751[2] = inst_22669);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22687__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 19))
{var state_22687__$1 = state_22687;var statearr_22710_22752 = state_22687__$1;(statearr_22710_22752[2] = null);
(statearr_22710_22752[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 11))
{var inst_22626 = (state_22687[13]);var inst_22640 = (state_22687[10]);var inst_22640__$1 = cljs.core.seq.call(null,inst_22626);var state_22687__$1 = (function (){var statearr_22711 = state_22687;(statearr_22711[10] = inst_22640__$1);
return statearr_22711;
})();if(inst_22640__$1)
{var statearr_22712_22753 = state_22687__$1;(statearr_22712_22753[1] = 13);
} else
{var statearr_22713_22754 = state_22687__$1;(statearr_22713_22754[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 9))
{var inst_22662 = (state_22687[2]);var state_22687__$1 = state_22687;var statearr_22714_22755 = state_22687__$1;(statearr_22714_22755[2] = inst_22662);
(statearr_22714_22755[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 5))
{var inst_22623 = cljs.core.deref.call(null,mults);var inst_22624 = cljs.core.vals.call(null,inst_22623);var inst_22625 = cljs.core.seq.call(null,inst_22624);var inst_22626 = inst_22625;var inst_22627 = null;var inst_22628 = 0;var inst_22629 = 0;var state_22687__$1 = (function (){var statearr_22715 = state_22687;(statearr_22715[12] = inst_22629);
(statearr_22715[13] = inst_22626);
(statearr_22715[14] = inst_22627);
(statearr_22715[16] = inst_22628);
return statearr_22715;
})();var statearr_22716_22756 = state_22687__$1;(statearr_22716_22756[2] = null);
(statearr_22716_22756[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 14))
{var state_22687__$1 = state_22687;var statearr_22720_22757 = state_22687__$1;(statearr_22720_22757[2] = null);
(statearr_22720_22757[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 16))
{var inst_22640 = (state_22687[10]);var inst_22644 = cljs.core.chunk_first.call(null,inst_22640);var inst_22645 = cljs.core.chunk_rest.call(null,inst_22640);var inst_22646 = cljs.core.count.call(null,inst_22644);var inst_22626 = inst_22645;var inst_22627 = inst_22644;var inst_22628 = inst_22646;var inst_22629 = 0;var state_22687__$1 = (function (){var statearr_22721 = state_22687;(statearr_22721[12] = inst_22629);
(statearr_22721[13] = inst_22626);
(statearr_22721[14] = inst_22627);
(statearr_22721[16] = inst_22628);
return statearr_22721;
})();var statearr_22722_22758 = state_22687__$1;(statearr_22722_22758[2] = null);
(statearr_22722_22758[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 10))
{var inst_22629 = (state_22687[12]);var inst_22626 = (state_22687[13]);var inst_22627 = (state_22687[14]);var inst_22628 = (state_22687[16]);var inst_22634 = cljs.core._nth.call(null,inst_22627,inst_22629);var inst_22635 = cljs.core.async.muxch_STAR_.call(null,inst_22634);var inst_22636 = cljs.core.async.close_BANG_.call(null,inst_22635);var inst_22637 = (inst_22629 + 1);var tmp22717 = inst_22626;var tmp22718 = inst_22627;var tmp22719 = inst_22628;var inst_22626__$1 = tmp22717;var inst_22627__$1 = tmp22718;var inst_22628__$1 = tmp22719;var inst_22629__$1 = inst_22637;var state_22687__$1 = (function (){var statearr_22723 = state_22687;(statearr_22723[12] = inst_22629__$1);
(statearr_22723[13] = inst_22626__$1);
(statearr_22723[14] = inst_22627__$1);
(statearr_22723[18] = inst_22636);
(statearr_22723[16] = inst_22628__$1);
return statearr_22723;
})();var statearr_22724_22759 = state_22687__$1;(statearr_22724_22759[2] = null);
(statearr_22724_22759[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 18))
{var inst_22655 = (state_22687[2]);var state_22687__$1 = state_22687;var statearr_22725_22760 = state_22687__$1;(statearr_22725_22760[2] = inst_22655);
(statearr_22725_22760[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22688 === 8))
{var inst_22629 = (state_22687[12]);var inst_22628 = (state_22687[16]);var inst_22631 = (inst_22629 < inst_22628);var inst_22632 = inst_22631;var state_22687__$1 = state_22687;if(cljs.core.truth_(inst_22632))
{var statearr_22726_22761 = state_22687__$1;(statearr_22726_22761[1] = 10);
} else
{var statearr_22727_22762 = state_22687__$1;(statearr_22727_22762[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6984__auto___22735,mults,ensure_mult,p))
;return ((function (switch__6920__auto__,c__6984__auto___22735,mults,ensure_mult,p){
return (function() {
var state_machine__6921__auto__ = null;
var state_machine__6921__auto____0 = (function (){var statearr_22731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22731[0] = state_machine__6921__auto__);
(statearr_22731[1] = 1);
return statearr_22731;
});
var state_machine__6921__auto____1 = (function (state_22687){while(true){
var ret_value__6922__auto__ = (function (){try{while(true){
var result__6923__auto__ = switch__6920__auto__.call(null,state_22687);if(cljs.core.keyword_identical_QMARK_.call(null,result__6923__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6923__auto__;
}
break;
}
}catch (e22732){if((e22732 instanceof Object))
{var ex__6924__auto__ = e22732;var statearr_22733_22763 = state_22687;(statearr_22733_22763[5] = ex__6924__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22687);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22732;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6922__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22764 = state_22687;
state_22687 = G__22764;
continue;
}
} else
{return ret_value__6922__auto__;
}
break;
}
});
state_machine__6921__auto__ = function(state_22687){
switch(arguments.length){
case 0:
return state_machine__6921__auto____0.call(this);
case 1:
return state_machine__6921__auto____1.call(this,state_22687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6921__auto____0;
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6921__auto____1;
return state_machine__6921__auto__;
})()
;})(switch__6920__auto__,c__6984__auto___22735,mults,ensure_mult,p))
})();var state__6986__auto__ = (function (){var statearr_22734 = f__6985__auto__.call(null);(statearr_22734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6984__auto___22735);
return statearr_22734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6986__auto__);
});})(c__6984__auto___22735,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6984__auto___22901 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6984__auto___22901,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6985__auto__ = (function (){var switch__6920__auto__ = ((function (c__6984__auto___22901,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22871){var state_val_22872 = (state_22871[1]);if((state_val_22872 === 7))
{var state_22871__$1 = state_22871;var statearr_22873_22902 = state_22871__$1;(statearr_22873_22902[2] = null);
(statearr_22873_22902[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22872 === 1))
{var state_22871__$1 = state_22871;var statearr_22874_22903 = state_22871__$1;(statearr_22874_22903[2] = null);
(statearr_22874_22903[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22872 === 4))
{var inst_22835 = (state_22871[7]);var inst_22837 = (inst_22835 < cnt);var state_22871__$1 = state_22871;if(cljs.core.truth_(inst_22837))
{var statearr_22875_22904 = state_22871__$1;(statearr_22875_22904[1] = 6);
} else
{var statearr_22876_22905 = state_22871__$1;(statearr_22876_22905[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22872 === 15))
{var inst_22867 = (state_22871[2]);var state_22871__$1 = state_22871;var statearr_22877_22906 = state_22871__$1;(statearr_22877_22906[2] = inst_22867);
(statearr_22877_22906[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22872 === 13))
{var inst_22860 = cljs.core.async.close_BANG_.call(null,out);var state_22871__$1 = state_22871;var statearr_22878_22907 = state_22871__$1;(statearr_22878_22907[2] = inst_22860);
(statearr_22878_22907[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22872 === 6))
{var state_22871__$1 = state_22871;var statearr_22879_22908 = state_22871__$1;(statearr_22879_22908[2] = null);
(statearr_22879_22908[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22872 === 3))
{var inst_22869 = (state_22871[2]);var state_22871__$1 = state_22871;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22871__$1,inst_22869);
} else
{if((state_val_22872 === 12))
{var inst_22857 = (state_22871[8]);var inst_22857__$1 = (state_22871[2]);var inst_22858 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22857__$1);var state_22871__$1 = (function (){var statearr_22880 = state_22871;(statearr_22880[8] = inst_22857__$1);
return statearr_22880;
})();if(cljs.core.truth_(inst_22858))
{var statearr_22881_22909 = state_22871__$1;(statearr_22881_22909[1] = 13);
} else
{var statearr_22882_22910 = state_22871__$1;(statearr_22882_22910[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22872 === 2))
{var inst_22834 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_22835 = 0;var state_22871__$1 = (function (){var statearr_22883 = state_22871;(statearr_22883[9] = inst_22834);
(statearr_22883[7] = inst_22835);
return statearr_22883;
})();var statearr_22884_22911 = state_22871__$1;(statearr_22884_22911[2] = null);
(statearr_22884_22911[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22872 === 11))
{var inst_22835 = (state_22871[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22871,10,Object,null,9);var inst_22844 = chs__$1.call(null,inst_22835);var inst_22845 = done.call(null,inst_22835);var inst_22846 = cljs.core.async.take_BANG_.call(null,inst_22844,inst_22845);var state_22871__$1 = state_22871;var statearr_22885_22912 = state_22871__$1;(statearr_22885_22912[2] = inst_22846);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22871__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22872 === 9))
{var inst_22835 = (state_22871[7]);var inst_22848 = (state_22871[2]);var inst_22849 = (inst_22835 + 1);var inst_22835__$1 = inst_22849;var state_22871__$1 = (function (){var statearr_22886 = state_22871;(statearr_22886[7] = inst_22835__$1);
(statearr_22886[10] = inst_22848);
return statearr_22886;
})();var statearr_22887_22913 = state_22871__$1;(statearr_22887_22913[2] = null);
(statearr_22887_22913[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22872 === 5))
{var inst_22855 = (state_22871[2]);var state_22871__$1 = (function (){var statearr_22888 = state_22871;(statearr_22888[11] = inst_22855);
return statearr_22888;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22871__$1,12,dchan);
} else
{if((state_val_22872 === 14))
{var inst_22857 = (state_22871[8]);var inst_22862 = cljs.core.apply.call(null,f,inst_22857);var state_22871__$1 = state_22871;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22871__$1,16,out,inst_22862);
} else
{if((state_val_22872 === 16))
{var inst_22864 = (state_22871[2]);var state_22871__$1 = (function (){var statearr_22889 = state_22871;(statearr_22889[12] = inst_22864);
return statearr_22889;
})();var statearr_22890_22914 = state_22871__$1;(statearr_22890_22914[2] = null);
(statearr_22890_22914[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22872 === 10))
{var inst_22839 = (state_22871[2]);var inst_22840 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_22871__$1 = (function (){var statearr_22891 = state_22871;(statearr_22891[13] = inst_22839);
return statearr_22891;
})();var statearr_22892_22915 = state_22871__$1;(statearr_22892_22915[2] = inst_22840);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22871__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22872 === 8))
{var inst_22853 = (state_22871[2]);var state_22871__$1 = state_22871;var statearr_22893_22916 = state_22871__$1;(statearr_22893_22916[2] = inst_22853);
(statearr_22893_22916[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6984__auto___22901,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6920__auto__,c__6984__auto___22901,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6921__auto__ = null;
var state_machine__6921__auto____0 = (function (){var statearr_22897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22897[0] = state_machine__6921__auto__);
(statearr_22897[1] = 1);
return statearr_22897;
});
var state_machine__6921__auto____1 = (function (state_22871){while(true){
var ret_value__6922__auto__ = (function (){try{while(true){
var result__6923__auto__ = switch__6920__auto__.call(null,state_22871);if(cljs.core.keyword_identical_QMARK_.call(null,result__6923__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6923__auto__;
}
break;
}
}catch (e22898){if((e22898 instanceof Object))
{var ex__6924__auto__ = e22898;var statearr_22899_22917 = state_22871;(statearr_22899_22917[5] = ex__6924__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22871);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22898;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6922__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22918 = state_22871;
state_22871 = G__22918;
continue;
}
} else
{return ret_value__6922__auto__;
}
break;
}
});
state_machine__6921__auto__ = function(state_22871){
switch(arguments.length){
case 0:
return state_machine__6921__auto____0.call(this);
case 1:
return state_machine__6921__auto____1.call(this,state_22871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6921__auto____0;
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6921__auto____1;
return state_machine__6921__auto__;
})()
;})(switch__6920__auto__,c__6984__auto___22901,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6986__auto__ = (function (){var statearr_22900 = f__6985__auto__.call(null);(statearr_22900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6984__auto___22901);
return statearr_22900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6986__auto__);
});})(c__6984__auto___22901,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6984__auto___23026 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6984__auto___23026,out){
return (function (){var f__6985__auto__ = (function (){var switch__6920__auto__ = ((function (c__6984__auto___23026,out){
return (function (state_23002){var state_val_23003 = (state_23002[1]);if((state_val_23003 === 7))
{var inst_22981 = (state_23002[7]);var inst_22982 = (state_23002[8]);var inst_22981__$1 = (state_23002[2]);var inst_22982__$1 = cljs.core.nth.call(null,inst_22981__$1,0,null);var inst_22983 = cljs.core.nth.call(null,inst_22981__$1,1,null);var inst_22984 = (inst_22982__$1 == null);var state_23002__$1 = (function (){var statearr_23004 = state_23002;(statearr_23004[7] = inst_22981__$1);
(statearr_23004[9] = inst_22983);
(statearr_23004[8] = inst_22982__$1);
return statearr_23004;
})();if(cljs.core.truth_(inst_22984))
{var statearr_23005_23027 = state_23002__$1;(statearr_23005_23027[1] = 8);
} else
{var statearr_23006_23028 = state_23002__$1;(statearr_23006_23028[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23003 === 1))
{var inst_22973 = cljs.core.vec.call(null,chs);var inst_22974 = inst_22973;var state_23002__$1 = (function (){var statearr_23007 = state_23002;(statearr_23007[10] = inst_22974);
return statearr_23007;
})();var statearr_23008_23029 = state_23002__$1;(statearr_23008_23029[2] = null);
(statearr_23008_23029[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23003 === 4))
{var inst_22974 = (state_23002[10]);var state_23002__$1 = state_23002;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23002__$1,7,inst_22974);
} else
{if((state_val_23003 === 6))
{var inst_22998 = (state_23002[2]);var state_23002__$1 = state_23002;var statearr_23009_23030 = state_23002__$1;(statearr_23009_23030[2] = inst_22998);
(statearr_23009_23030[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23003 === 3))
{var inst_23000 = (state_23002[2]);var state_23002__$1 = state_23002;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23002__$1,inst_23000);
} else
{if((state_val_23003 === 2))
{var inst_22974 = (state_23002[10]);var inst_22976 = cljs.core.count.call(null,inst_22974);var inst_22977 = (inst_22976 > 0);var state_23002__$1 = state_23002;if(cljs.core.truth_(inst_22977))
{var statearr_23011_23031 = state_23002__$1;(statearr_23011_23031[1] = 4);
} else
{var statearr_23012_23032 = state_23002__$1;(statearr_23012_23032[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23003 === 11))
{var inst_22974 = (state_23002[10]);var inst_22991 = (state_23002[2]);var tmp23010 = inst_22974;var inst_22974__$1 = tmp23010;var state_23002__$1 = (function (){var statearr_23013 = state_23002;(statearr_23013[10] = inst_22974__$1);
(statearr_23013[11] = inst_22991);
return statearr_23013;
})();var statearr_23014_23033 = state_23002__$1;(statearr_23014_23033[2] = null);
(statearr_23014_23033[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23003 === 9))
{var inst_22982 = (state_23002[8]);var state_23002__$1 = state_23002;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23002__$1,11,out,inst_22982);
} else
{if((state_val_23003 === 5))
{var inst_22996 = cljs.core.async.close_BANG_.call(null,out);var state_23002__$1 = state_23002;var statearr_23015_23034 = state_23002__$1;(statearr_23015_23034[2] = inst_22996);
(statearr_23015_23034[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23003 === 10))
{var inst_22994 = (state_23002[2]);var state_23002__$1 = state_23002;var statearr_23016_23035 = state_23002__$1;(statearr_23016_23035[2] = inst_22994);
(statearr_23016_23035[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23003 === 8))
{var inst_22981 = (state_23002[7]);var inst_22983 = (state_23002[9]);var inst_22982 = (state_23002[8]);var inst_22974 = (state_23002[10]);var inst_22986 = (function (){var c = inst_22983;var v = inst_22982;var vec__22979 = inst_22981;var cs = inst_22974;return ((function (c,v,vec__22979,cs,inst_22981,inst_22983,inst_22982,inst_22974,state_val_23003,c__6984__auto___23026,out){
return (function (p1__22919_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__22919_SHARP_);
});
;})(c,v,vec__22979,cs,inst_22981,inst_22983,inst_22982,inst_22974,state_val_23003,c__6984__auto___23026,out))
})();var inst_22987 = cljs.core.filterv.call(null,inst_22986,inst_22974);var inst_22974__$1 = inst_22987;var state_23002__$1 = (function (){var statearr_23017 = state_23002;(statearr_23017[10] = inst_22974__$1);
return statearr_23017;
})();var statearr_23018_23036 = state_23002__$1;(statearr_23018_23036[2] = null);
(statearr_23018_23036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6984__auto___23026,out))
;return ((function (switch__6920__auto__,c__6984__auto___23026,out){
return (function() {
var state_machine__6921__auto__ = null;
var state_machine__6921__auto____0 = (function (){var statearr_23022 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23022[0] = state_machine__6921__auto__);
(statearr_23022[1] = 1);
return statearr_23022;
});
var state_machine__6921__auto____1 = (function (state_23002){while(true){
var ret_value__6922__auto__ = (function (){try{while(true){
var result__6923__auto__ = switch__6920__auto__.call(null,state_23002);if(cljs.core.keyword_identical_QMARK_.call(null,result__6923__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6923__auto__;
}
break;
}
}catch (e23023){if((e23023 instanceof Object))
{var ex__6924__auto__ = e23023;var statearr_23024_23037 = state_23002;(statearr_23024_23037[5] = ex__6924__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23002);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6922__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23038 = state_23002;
state_23002 = G__23038;
continue;
}
} else
{return ret_value__6922__auto__;
}
break;
}
});
state_machine__6921__auto__ = function(state_23002){
switch(arguments.length){
case 0:
return state_machine__6921__auto____0.call(this);
case 1:
return state_machine__6921__auto____1.call(this,state_23002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6921__auto____0;
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6921__auto____1;
return state_machine__6921__auto__;
})()
;})(switch__6920__auto__,c__6984__auto___23026,out))
})();var state__6986__auto__ = (function (){var statearr_23025 = f__6985__auto__.call(null);(statearr_23025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6984__auto___23026);
return statearr_23025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6986__auto__);
});})(c__6984__auto___23026,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6984__auto___23131 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6984__auto___23131,out){
return (function (){var f__6985__auto__ = (function (){var switch__6920__auto__ = ((function (c__6984__auto___23131,out){
return (function (state_23108){var state_val_23109 = (state_23108[1]);if((state_val_23109 === 7))
{var inst_23090 = (state_23108[7]);var inst_23090__$1 = (state_23108[2]);var inst_23091 = (inst_23090__$1 == null);var inst_23092 = cljs.core.not.call(null,inst_23091);var state_23108__$1 = (function (){var statearr_23110 = state_23108;(statearr_23110[7] = inst_23090__$1);
return statearr_23110;
})();if(inst_23092)
{var statearr_23111_23132 = state_23108__$1;(statearr_23111_23132[1] = 8);
} else
{var statearr_23112_23133 = state_23108__$1;(statearr_23112_23133[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23109 === 1))
{var inst_23085 = 0;var state_23108__$1 = (function (){var statearr_23113 = state_23108;(statearr_23113[8] = inst_23085);
return statearr_23113;
})();var statearr_23114_23134 = state_23108__$1;(statearr_23114_23134[2] = null);
(statearr_23114_23134[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23109 === 4))
{var state_23108__$1 = state_23108;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23108__$1,7,ch);
} else
{if((state_val_23109 === 6))
{var inst_23103 = (state_23108[2]);var state_23108__$1 = state_23108;var statearr_23115_23135 = state_23108__$1;(statearr_23115_23135[2] = inst_23103);
(statearr_23115_23135[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23109 === 3))
{var inst_23105 = (state_23108[2]);var inst_23106 = cljs.core.async.close_BANG_.call(null,out);var state_23108__$1 = (function (){var statearr_23116 = state_23108;(statearr_23116[9] = inst_23105);
return statearr_23116;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23108__$1,inst_23106);
} else
{if((state_val_23109 === 2))
{var inst_23085 = (state_23108[8]);var inst_23087 = (inst_23085 < n);var state_23108__$1 = state_23108;if(cljs.core.truth_(inst_23087))
{var statearr_23117_23136 = state_23108__$1;(statearr_23117_23136[1] = 4);
} else
{var statearr_23118_23137 = state_23108__$1;(statearr_23118_23137[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23109 === 11))
{var inst_23085 = (state_23108[8]);var inst_23095 = (state_23108[2]);var inst_23096 = (inst_23085 + 1);var inst_23085__$1 = inst_23096;var state_23108__$1 = (function (){var statearr_23119 = state_23108;(statearr_23119[8] = inst_23085__$1);
(statearr_23119[10] = inst_23095);
return statearr_23119;
})();var statearr_23120_23138 = state_23108__$1;(statearr_23120_23138[2] = null);
(statearr_23120_23138[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23109 === 9))
{var state_23108__$1 = state_23108;var statearr_23121_23139 = state_23108__$1;(statearr_23121_23139[2] = null);
(statearr_23121_23139[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23109 === 5))
{var state_23108__$1 = state_23108;var statearr_23122_23140 = state_23108__$1;(statearr_23122_23140[2] = null);
(statearr_23122_23140[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23109 === 10))
{var inst_23100 = (state_23108[2]);var state_23108__$1 = state_23108;var statearr_23123_23141 = state_23108__$1;(statearr_23123_23141[2] = inst_23100);
(statearr_23123_23141[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23109 === 8))
{var inst_23090 = (state_23108[7]);var state_23108__$1 = state_23108;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23108__$1,11,out,inst_23090);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6984__auto___23131,out))
;return ((function (switch__6920__auto__,c__6984__auto___23131,out){
return (function() {
var state_machine__6921__auto__ = null;
var state_machine__6921__auto____0 = (function (){var statearr_23127 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23127[0] = state_machine__6921__auto__);
(statearr_23127[1] = 1);
return statearr_23127;
});
var state_machine__6921__auto____1 = (function (state_23108){while(true){
var ret_value__6922__auto__ = (function (){try{while(true){
var result__6923__auto__ = switch__6920__auto__.call(null,state_23108);if(cljs.core.keyword_identical_QMARK_.call(null,result__6923__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6923__auto__;
}
break;
}
}catch (e23128){if((e23128 instanceof Object))
{var ex__6924__auto__ = e23128;var statearr_23129_23142 = state_23108;(statearr_23129_23142[5] = ex__6924__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23108);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23128;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6922__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23143 = state_23108;
state_23108 = G__23143;
continue;
}
} else
{return ret_value__6922__auto__;
}
break;
}
});
state_machine__6921__auto__ = function(state_23108){
switch(arguments.length){
case 0:
return state_machine__6921__auto____0.call(this);
case 1:
return state_machine__6921__auto____1.call(this,state_23108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6921__auto____0;
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6921__auto____1;
return state_machine__6921__auto__;
})()
;})(switch__6920__auto__,c__6984__auto___23131,out))
})();var state__6986__auto__ = (function (){var statearr_23130 = f__6985__auto__.call(null);(statearr_23130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6984__auto___23131);
return statearr_23130;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6986__auto__);
});})(c__6984__auto___23131,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6984__auto___23240 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6984__auto___23240,out){
return (function (){var f__6985__auto__ = (function (){var switch__6920__auto__ = ((function (c__6984__auto___23240,out){
return (function (state_23215){var state_val_23216 = (state_23215[1]);if((state_val_23216 === 7))
{var inst_23210 = (state_23215[2]);var state_23215__$1 = state_23215;var statearr_23217_23241 = state_23215__$1;(statearr_23217_23241[2] = inst_23210);
(statearr_23217_23241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23216 === 1))
{var inst_23192 = null;var state_23215__$1 = (function (){var statearr_23218 = state_23215;(statearr_23218[7] = inst_23192);
return statearr_23218;
})();var statearr_23219_23242 = state_23215__$1;(statearr_23219_23242[2] = null);
(statearr_23219_23242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23216 === 4))
{var inst_23195 = (state_23215[8]);var inst_23195__$1 = (state_23215[2]);var inst_23196 = (inst_23195__$1 == null);var inst_23197 = cljs.core.not.call(null,inst_23196);var state_23215__$1 = (function (){var statearr_23220 = state_23215;(statearr_23220[8] = inst_23195__$1);
return statearr_23220;
})();if(inst_23197)
{var statearr_23221_23243 = state_23215__$1;(statearr_23221_23243[1] = 5);
} else
{var statearr_23222_23244 = state_23215__$1;(statearr_23222_23244[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23216 === 6))
{var state_23215__$1 = state_23215;var statearr_23223_23245 = state_23215__$1;(statearr_23223_23245[2] = null);
(statearr_23223_23245[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23216 === 3))
{var inst_23212 = (state_23215[2]);var inst_23213 = cljs.core.async.close_BANG_.call(null,out);var state_23215__$1 = (function (){var statearr_23224 = state_23215;(statearr_23224[9] = inst_23212);
return statearr_23224;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23215__$1,inst_23213);
} else
{if((state_val_23216 === 2))
{var state_23215__$1 = state_23215;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23215__$1,4,ch);
} else
{if((state_val_23216 === 11))
{var inst_23195 = (state_23215[8]);var inst_23204 = (state_23215[2]);var inst_23192 = inst_23195;var state_23215__$1 = (function (){var statearr_23225 = state_23215;(statearr_23225[7] = inst_23192);
(statearr_23225[10] = inst_23204);
return statearr_23225;
})();var statearr_23226_23246 = state_23215__$1;(statearr_23226_23246[2] = null);
(statearr_23226_23246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23216 === 9))
{var inst_23195 = (state_23215[8]);var state_23215__$1 = state_23215;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23215__$1,11,out,inst_23195);
} else
{if((state_val_23216 === 5))
{var inst_23195 = (state_23215[8]);var inst_23192 = (state_23215[7]);var inst_23199 = cljs.core._EQ_.call(null,inst_23195,inst_23192);var state_23215__$1 = state_23215;if(inst_23199)
{var statearr_23228_23247 = state_23215__$1;(statearr_23228_23247[1] = 8);
} else
{var statearr_23229_23248 = state_23215__$1;(statearr_23229_23248[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23216 === 10))
{var inst_23207 = (state_23215[2]);var state_23215__$1 = state_23215;var statearr_23230_23249 = state_23215__$1;(statearr_23230_23249[2] = inst_23207);
(statearr_23230_23249[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23216 === 8))
{var inst_23192 = (state_23215[7]);var tmp23227 = inst_23192;var inst_23192__$1 = tmp23227;var state_23215__$1 = (function (){var statearr_23231 = state_23215;(statearr_23231[7] = inst_23192__$1);
return statearr_23231;
})();var statearr_23232_23250 = state_23215__$1;(statearr_23232_23250[2] = null);
(statearr_23232_23250[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6984__auto___23240,out))
;return ((function (switch__6920__auto__,c__6984__auto___23240,out){
return (function() {
var state_machine__6921__auto__ = null;
var state_machine__6921__auto____0 = (function (){var statearr_23236 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23236[0] = state_machine__6921__auto__);
(statearr_23236[1] = 1);
return statearr_23236;
});
var state_machine__6921__auto____1 = (function (state_23215){while(true){
var ret_value__6922__auto__ = (function (){try{while(true){
var result__6923__auto__ = switch__6920__auto__.call(null,state_23215);if(cljs.core.keyword_identical_QMARK_.call(null,result__6923__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6923__auto__;
}
break;
}
}catch (e23237){if((e23237 instanceof Object))
{var ex__6924__auto__ = e23237;var statearr_23238_23251 = state_23215;(statearr_23238_23251[5] = ex__6924__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23215);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23237;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6922__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23252 = state_23215;
state_23215 = G__23252;
continue;
}
} else
{return ret_value__6922__auto__;
}
break;
}
});
state_machine__6921__auto__ = function(state_23215){
switch(arguments.length){
case 0:
return state_machine__6921__auto____0.call(this);
case 1:
return state_machine__6921__auto____1.call(this,state_23215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6921__auto____0;
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6921__auto____1;
return state_machine__6921__auto__;
})()
;})(switch__6920__auto__,c__6984__auto___23240,out))
})();var state__6986__auto__ = (function (){var statearr_23239 = f__6985__auto__.call(null);(statearr_23239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6984__auto___23240);
return statearr_23239;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6986__auto__);
});})(c__6984__auto___23240,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6984__auto___23387 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6984__auto___23387,out){
return (function (){var f__6985__auto__ = (function (){var switch__6920__auto__ = ((function (c__6984__auto___23387,out){
return (function (state_23357){var state_val_23358 = (state_23357[1]);if((state_val_23358 === 7))
{var inst_23353 = (state_23357[2]);var state_23357__$1 = state_23357;var statearr_23359_23388 = state_23357__$1;(statearr_23359_23388[2] = inst_23353);
(statearr_23359_23388[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23358 === 1))
{var inst_23320 = (new Array(n));var inst_23321 = inst_23320;var inst_23322 = 0;var state_23357__$1 = (function (){var statearr_23360 = state_23357;(statearr_23360[7] = inst_23322);
(statearr_23360[8] = inst_23321);
return statearr_23360;
})();var statearr_23361_23389 = state_23357__$1;(statearr_23361_23389[2] = null);
(statearr_23361_23389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23358 === 4))
{var inst_23325 = (state_23357[9]);var inst_23325__$1 = (state_23357[2]);var inst_23326 = (inst_23325__$1 == null);var inst_23327 = cljs.core.not.call(null,inst_23326);var state_23357__$1 = (function (){var statearr_23362 = state_23357;(statearr_23362[9] = inst_23325__$1);
return statearr_23362;
})();if(inst_23327)
{var statearr_23363_23390 = state_23357__$1;(statearr_23363_23390[1] = 5);
} else
{var statearr_23364_23391 = state_23357__$1;(statearr_23364_23391[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23358 === 15))
{var inst_23347 = (state_23357[2]);var state_23357__$1 = state_23357;var statearr_23365_23392 = state_23357__$1;(statearr_23365_23392[2] = inst_23347);
(statearr_23365_23392[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23358 === 13))
{var state_23357__$1 = state_23357;var statearr_23366_23393 = state_23357__$1;(statearr_23366_23393[2] = null);
(statearr_23366_23393[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23358 === 6))
{var inst_23322 = (state_23357[7]);var inst_23343 = (inst_23322 > 0);var state_23357__$1 = state_23357;if(cljs.core.truth_(inst_23343))
{var statearr_23367_23394 = state_23357__$1;(statearr_23367_23394[1] = 12);
} else
{var statearr_23368_23395 = state_23357__$1;(statearr_23368_23395[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23358 === 3))
{var inst_23355 = (state_23357[2]);var state_23357__$1 = state_23357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23357__$1,inst_23355);
} else
{if((state_val_23358 === 12))
{var inst_23321 = (state_23357[8]);var inst_23345 = cljs.core.vec.call(null,inst_23321);var state_23357__$1 = state_23357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23357__$1,15,out,inst_23345);
} else
{if((state_val_23358 === 2))
{var state_23357__$1 = state_23357;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23357__$1,4,ch);
} else
{if((state_val_23358 === 11))
{var inst_23337 = (state_23357[2]);var inst_23338 = (new Array(n));var inst_23321 = inst_23338;var inst_23322 = 0;var state_23357__$1 = (function (){var statearr_23369 = state_23357;(statearr_23369[7] = inst_23322);
(statearr_23369[8] = inst_23321);
(statearr_23369[10] = inst_23337);
return statearr_23369;
})();var statearr_23370_23396 = state_23357__$1;(statearr_23370_23396[2] = null);
(statearr_23370_23396[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23358 === 9))
{var inst_23321 = (state_23357[8]);var inst_23335 = cljs.core.vec.call(null,inst_23321);var state_23357__$1 = state_23357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23357__$1,11,out,inst_23335);
} else
{if((state_val_23358 === 5))
{var inst_23322 = (state_23357[7]);var inst_23321 = (state_23357[8]);var inst_23330 = (state_23357[11]);var inst_23325 = (state_23357[9]);var inst_23329 = (inst_23321[inst_23322] = inst_23325);var inst_23330__$1 = (inst_23322 + 1);var inst_23331 = (inst_23330__$1 < n);var state_23357__$1 = (function (){var statearr_23371 = state_23357;(statearr_23371[11] = inst_23330__$1);
(statearr_23371[12] = inst_23329);
return statearr_23371;
})();if(cljs.core.truth_(inst_23331))
{var statearr_23372_23397 = state_23357__$1;(statearr_23372_23397[1] = 8);
} else
{var statearr_23373_23398 = state_23357__$1;(statearr_23373_23398[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23358 === 14))
{var inst_23350 = (state_23357[2]);var inst_23351 = cljs.core.async.close_BANG_.call(null,out);var state_23357__$1 = (function (){var statearr_23375 = state_23357;(statearr_23375[13] = inst_23350);
return statearr_23375;
})();var statearr_23376_23399 = state_23357__$1;(statearr_23376_23399[2] = inst_23351);
(statearr_23376_23399[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23358 === 10))
{var inst_23341 = (state_23357[2]);var state_23357__$1 = state_23357;var statearr_23377_23400 = state_23357__$1;(statearr_23377_23400[2] = inst_23341);
(statearr_23377_23400[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23358 === 8))
{var inst_23321 = (state_23357[8]);var inst_23330 = (state_23357[11]);var tmp23374 = inst_23321;var inst_23321__$1 = tmp23374;var inst_23322 = inst_23330;var state_23357__$1 = (function (){var statearr_23378 = state_23357;(statearr_23378[7] = inst_23322);
(statearr_23378[8] = inst_23321__$1);
return statearr_23378;
})();var statearr_23379_23401 = state_23357__$1;(statearr_23379_23401[2] = null);
(statearr_23379_23401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6984__auto___23387,out))
;return ((function (switch__6920__auto__,c__6984__auto___23387,out){
return (function() {
var state_machine__6921__auto__ = null;
var state_machine__6921__auto____0 = (function (){var statearr_23383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23383[0] = state_machine__6921__auto__);
(statearr_23383[1] = 1);
return statearr_23383;
});
var state_machine__6921__auto____1 = (function (state_23357){while(true){
var ret_value__6922__auto__ = (function (){try{while(true){
var result__6923__auto__ = switch__6920__auto__.call(null,state_23357);if(cljs.core.keyword_identical_QMARK_.call(null,result__6923__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6923__auto__;
}
break;
}
}catch (e23384){if((e23384 instanceof Object))
{var ex__6924__auto__ = e23384;var statearr_23385_23402 = state_23357;(statearr_23385_23402[5] = ex__6924__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23357);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6922__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23403 = state_23357;
state_23357 = G__23403;
continue;
}
} else
{return ret_value__6922__auto__;
}
break;
}
});
state_machine__6921__auto__ = function(state_23357){
switch(arguments.length){
case 0:
return state_machine__6921__auto____0.call(this);
case 1:
return state_machine__6921__auto____1.call(this,state_23357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6921__auto____0;
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6921__auto____1;
return state_machine__6921__auto__;
})()
;})(switch__6920__auto__,c__6984__auto___23387,out))
})();var state__6986__auto__ = (function (){var statearr_23386 = f__6985__auto__.call(null);(statearr_23386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6984__auto___23387);
return statearr_23386;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6986__auto__);
});})(c__6984__auto___23387,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6984__auto___23546 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6984__auto___23546,out){
return (function (){var f__6985__auto__ = (function (){var switch__6920__auto__ = ((function (c__6984__auto___23546,out){
return (function (state_23516){var state_val_23517 = (state_23516[1]);if((state_val_23517 === 7))
{var inst_23512 = (state_23516[2]);var state_23516__$1 = state_23516;var statearr_23518_23547 = state_23516__$1;(statearr_23518_23547[2] = inst_23512);
(statearr_23518_23547[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23517 === 1))
{var inst_23475 = [];var inst_23476 = inst_23475;var inst_23477 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_23516__$1 = (function (){var statearr_23519 = state_23516;(statearr_23519[7] = inst_23477);
(statearr_23519[8] = inst_23476);
return statearr_23519;
})();var statearr_23520_23548 = state_23516__$1;(statearr_23520_23548[2] = null);
(statearr_23520_23548[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23517 === 4))
{var inst_23480 = (state_23516[9]);var inst_23480__$1 = (state_23516[2]);var inst_23481 = (inst_23480__$1 == null);var inst_23482 = cljs.core.not.call(null,inst_23481);var state_23516__$1 = (function (){var statearr_23521 = state_23516;(statearr_23521[9] = inst_23480__$1);
return statearr_23521;
})();if(inst_23482)
{var statearr_23522_23549 = state_23516__$1;(statearr_23522_23549[1] = 5);
} else
{var statearr_23523_23550 = state_23516__$1;(statearr_23523_23550[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23517 === 15))
{var inst_23506 = (state_23516[2]);var state_23516__$1 = state_23516;var statearr_23524_23551 = state_23516__$1;(statearr_23524_23551[2] = inst_23506);
(statearr_23524_23551[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23517 === 13))
{var state_23516__$1 = state_23516;var statearr_23525_23552 = state_23516__$1;(statearr_23525_23552[2] = null);
(statearr_23525_23552[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23517 === 6))
{var inst_23476 = (state_23516[8]);var inst_23501 = inst_23476.length;var inst_23502 = (inst_23501 > 0);var state_23516__$1 = state_23516;if(cljs.core.truth_(inst_23502))
{var statearr_23526_23553 = state_23516__$1;(statearr_23526_23553[1] = 12);
} else
{var statearr_23527_23554 = state_23516__$1;(statearr_23527_23554[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23517 === 3))
{var inst_23514 = (state_23516[2]);var state_23516__$1 = state_23516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23516__$1,inst_23514);
} else
{if((state_val_23517 === 12))
{var inst_23476 = (state_23516[8]);var inst_23504 = cljs.core.vec.call(null,inst_23476);var state_23516__$1 = state_23516;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23516__$1,15,out,inst_23504);
} else
{if((state_val_23517 === 2))
{var state_23516__$1 = state_23516;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23516__$1,4,ch);
} else
{if((state_val_23517 === 11))
{var inst_23480 = (state_23516[9]);var inst_23484 = (state_23516[10]);var inst_23494 = (state_23516[2]);var inst_23495 = [];var inst_23496 = inst_23495.push(inst_23480);var inst_23476 = inst_23495;var inst_23477 = inst_23484;var state_23516__$1 = (function (){var statearr_23528 = state_23516;(statearr_23528[11] = inst_23496);
(statearr_23528[7] = inst_23477);
(statearr_23528[12] = inst_23494);
(statearr_23528[8] = inst_23476);
return statearr_23528;
})();var statearr_23529_23555 = state_23516__$1;(statearr_23529_23555[2] = null);
(statearr_23529_23555[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23517 === 9))
{var inst_23476 = (state_23516[8]);var inst_23492 = cljs.core.vec.call(null,inst_23476);var state_23516__$1 = state_23516;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23516__$1,11,out,inst_23492);
} else
{if((state_val_23517 === 5))
{var inst_23480 = (state_23516[9]);var inst_23477 = (state_23516[7]);var inst_23484 = (state_23516[10]);var inst_23484__$1 = f.call(null,inst_23480);var inst_23485 = cljs.core._EQ_.call(null,inst_23484__$1,inst_23477);var inst_23486 = cljs.core.keyword_identical_QMARK_.call(null,inst_23477,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_23487 = (inst_23485) || (inst_23486);var state_23516__$1 = (function (){var statearr_23530 = state_23516;(statearr_23530[10] = inst_23484__$1);
return statearr_23530;
})();if(cljs.core.truth_(inst_23487))
{var statearr_23531_23556 = state_23516__$1;(statearr_23531_23556[1] = 8);
} else
{var statearr_23532_23557 = state_23516__$1;(statearr_23532_23557[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23517 === 14))
{var inst_23509 = (state_23516[2]);var inst_23510 = cljs.core.async.close_BANG_.call(null,out);var state_23516__$1 = (function (){var statearr_23534 = state_23516;(statearr_23534[13] = inst_23509);
return statearr_23534;
})();var statearr_23535_23558 = state_23516__$1;(statearr_23535_23558[2] = inst_23510);
(statearr_23535_23558[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23517 === 10))
{var inst_23499 = (state_23516[2]);var state_23516__$1 = state_23516;var statearr_23536_23559 = state_23516__$1;(statearr_23536_23559[2] = inst_23499);
(statearr_23536_23559[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23517 === 8))
{var inst_23480 = (state_23516[9]);var inst_23476 = (state_23516[8]);var inst_23484 = (state_23516[10]);var inst_23489 = inst_23476.push(inst_23480);var tmp23533 = inst_23476;var inst_23476__$1 = tmp23533;var inst_23477 = inst_23484;var state_23516__$1 = (function (){var statearr_23537 = state_23516;(statearr_23537[14] = inst_23489);
(statearr_23537[7] = inst_23477);
(statearr_23537[8] = inst_23476__$1);
return statearr_23537;
})();var statearr_23538_23560 = state_23516__$1;(statearr_23538_23560[2] = null);
(statearr_23538_23560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6984__auto___23546,out))
;return ((function (switch__6920__auto__,c__6984__auto___23546,out){
return (function() {
var state_machine__6921__auto__ = null;
var state_machine__6921__auto____0 = (function (){var statearr_23542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23542[0] = state_machine__6921__auto__);
(statearr_23542[1] = 1);
return statearr_23542;
});
var state_machine__6921__auto____1 = (function (state_23516){while(true){
var ret_value__6922__auto__ = (function (){try{while(true){
var result__6923__auto__ = switch__6920__auto__.call(null,state_23516);if(cljs.core.keyword_identical_QMARK_.call(null,result__6923__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6923__auto__;
}
break;
}
}catch (e23543){if((e23543 instanceof Object))
{var ex__6924__auto__ = e23543;var statearr_23544_23561 = state_23516;(statearr_23544_23561[5] = ex__6924__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23516);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23543;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6922__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23562 = state_23516;
state_23516 = G__23562;
continue;
}
} else
{return ret_value__6922__auto__;
}
break;
}
});
state_machine__6921__auto__ = function(state_23516){
switch(arguments.length){
case 0:
return state_machine__6921__auto____0.call(this);
case 1:
return state_machine__6921__auto____1.call(this,state_23516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6921__auto____0;
state_machine__6921__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6921__auto____1;
return state_machine__6921__auto__;
})()
;})(switch__6920__auto__,c__6984__auto___23546,out))
})();var state__6986__auto__ = (function (){var statearr_23545 = f__6985__auto__.call(null);(statearr_23545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6984__auto___23546);
return statearr_23545;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6986__auto__);
});})(c__6984__auto___23546,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map