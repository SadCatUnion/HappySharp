   
declare module 'csharp' {
    import * as CSharp from 'csharp';
    export default CSharp;
}
declare module 'csharp' {
    interface $Ref<T> {
        value: T
    }
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            set_Item(index: number, value: T):void;
        }
    }
    interface $Task<T> {}
    namespace System {
        class Array extends System.Object implements System.ICloneable, System.Collections.IList, System.Collections.ICollection, System.Collections.IEnumerable, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable
        {
            public get Length(): number;
            public get LongLength(): bigint;
            public get Rank(): number;
            public get SyncRoot(): any;
            public get IsReadOnly(): boolean;
            public get IsFixedSize(): boolean;
            public get IsSynchronized(): boolean;
            public static get MaxLength(): number;
            public CopyTo ($array: System.Array, $index: number) : void
            public CopyTo ($array: System.Array, $index: bigint) : void
            public static IndexOf ($array: System.Array, $value: any) : number
            public static IndexOf ($array: System.Array, $value: any, $startIndex: number) : number
            public static IndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
            public static LastIndexOf ($array: System.Array, $value: any) : number
            public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number) : number
            public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
            public static Reverse ($array: System.Array) : void
            public static Reverse ($array: System.Array, $index: number, $length: number) : void
            public static Sort ($array: System.Array) : void
            public static Sort ($keys: System.Array, $items: System.Array) : void
            public static Sort ($array: System.Array, $index: number, $length: number) : void
            public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number) : void
            public static Sort ($array: System.Array, $comparer: System.Collections.IComparer) : void
            public static Sort ($keys: System.Array, $items: System.Array, $comparer: System.Collections.IComparer) : void
            public static Sort ($array: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
            public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
            public GetEnumerator () : System.Collections.IEnumerator
            public static CreateInstance ($elementType: System.Type, $length: number) : System.Array
            public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number) : System.Array
            public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number, $length3: number) : System.Array
            public static CreateInstance ($elementType: System.Type, ...lengths: number[]) : System.Array
            public static CreateInstance ($elementType: System.Type, $lengths: System.Array$1<number>, $lowerBounds: System.Array$1<number>) : System.Array
            public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: number) : void
            public static Copy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
            public static ConstrainedCopy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
            public static Clear ($array: System.Array) : void
            public static Clear ($array: System.Array, $index: number, $length: number) : void
            public GetLength ($dimension: number) : number
            public GetUpperBound ($dimension: number) : number
            public GetLowerBound ($dimension: number) : number
            public Initialize () : void
            public static CreateInstance ($elementType: System.Type, ...lengths: bigint[]) : System.Array
            public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: bigint) : void
            public static Copy ($sourceArray: System.Array, $sourceIndex: bigint, $destinationArray: System.Array, $destinationIndex: bigint, $length: bigint) : void
            public GetValue (...indices: number[]) : any
            public GetValue ($index: number) : any
            public GetValue ($index1: number, $index2: number) : any
            public GetValue ($index1: number, $index2: number, $index3: number) : any
            public SetValue ($value: any, $index: number) : void
            public SetValue ($value: any, $index1: number, $index2: number) : void
            public SetValue ($value: any, $index1: number, $index2: number, $index3: number) : void
            public SetValue ($value: any, ...indices: number[]) : void
            public GetValue ($index: bigint) : any
            public GetValue ($index1: bigint, $index2: bigint) : any
            public GetValue ($index1: bigint, $index2: bigint, $index3: bigint) : any
            public GetValue (...indices: bigint[]) : any
            public SetValue ($value: any, $index: bigint) : void
            public SetValue ($value: any, $index1: bigint, $index2: bigint) : void
            public SetValue ($value: any, $index1: bigint, $index2: bigint, $index3: bigint) : void
            public SetValue ($value: any, ...indices: bigint[]) : void
            public GetLongLength ($dimension: number) : bigint
            public Clone () : any
            public static BinarySearch ($array: System.Array, $value: any) : number
            public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any) : number
            public static BinarySearch ($array: System.Array, $value: any, $comparer: System.Collections.IComparer) : number
            public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any, $comparer: System.Collections.IComparer) : number
        }
        class Object
        {
            public GetType () : System.Type
            public ToString () : string
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public static ReferenceEquals ($objA: any, $objB: any) : boolean
            public GetHashCode () : number
            public constructor ()
        }
        interface ICloneable
        {
            Clone () : any
        }
        class Void extends System.ValueType
        {
        }
        class ValueType extends System.Object
        {
        }
        class Int32 extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.IBinaryInteger$1<number>, System.IBinaryNumber$1<number>, System.IBitwiseOperators$3<number, number, number>, System.INumber$1<number>, System.IAdditionOperators$3<number, number, number>, System.IAdditiveIdentity$2<number, number>, System.IComparisonOperators$2<number, number>, System.IEqualityOperators$2<number, number>, System.IDecrementOperators$1<number>, System.IDivisionOperators$3<number, number, number>, System.IIncrementOperators$1<number>, System.IModulusOperators$3<number, number, number>, System.IMultiplicativeIdentity$2<number, number>, System.IMultiplyOperators$3<number, number, number>, System.ISpanParseable$1<number>, System.IParseable$1<number>, System.ISubtractionOperators$3<number, number, number>, System.IUnaryNegationOperators$2<number, number>, System.IUnaryPlusOperators$2<number, number>, System.IShiftOperators$2<number, number>, System.IMinMaxValue$1<number>, System.ISignedNumber$1<number>
        {
            public static MaxValue : number
            public static MinValue : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: number) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: number) : boolean
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider) : boolean
            public static Parse ($s: string) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : number
            public static Parse ($s: string, $provider: System.IFormatProvider) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : number
            public static Parse ($s: System.ReadOnlySpan$1<number>, $style?: System.Globalization.NumberStyles, $provider?: System.IFormatProvider) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<number>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public GetTypeCode () : System.TypeCode
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static Equals ($objA: any, $objB: any) : boolean
        }
        interface IComparable
        {
            CompareTo ($obj: any) : number
        }
        interface IConvertible
        {
            GetTypeCode () : System.TypeCode
            ToBoolean ($provider: System.IFormatProvider) : boolean
            ToChar ($provider: System.IFormatProvider) : number
            ToSByte ($provider: System.IFormatProvider) : number
            ToByte ($provider: System.IFormatProvider) : number
            ToInt16 ($provider: System.IFormatProvider) : number
            ToUInt16 ($provider: System.IFormatProvider) : number
            ToInt32 ($provider: System.IFormatProvider) : number
            ToUInt32 ($provider: System.IFormatProvider) : number
            ToInt64 ($provider: System.IFormatProvider) : bigint
            ToUInt64 ($provider: System.IFormatProvider) : bigint
            ToSingle ($provider: System.IFormatProvider) : number
            ToDouble ($provider: System.IFormatProvider) : number
            ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            ToDateTime ($provider: System.IFormatProvider) : Date
            ToString ($provider: System.IFormatProvider) : string
            ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
        }
        interface ISpanFormattable extends System.IFormattable
        {
            TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            ToString ($format: string, $formatProvider: System.IFormatProvider) : string
        }
        interface IFormattable
        {
            ToString ($format: string, $formatProvider: System.IFormatProvider) : string
        }
        interface IComparable$1<T>
        {
        }
        interface IEquatable$1<T>
        {
        }
        interface IBinaryInteger$1<TSelf> extends System.IBinaryNumber$1<TSelf>, System.IBitwiseOperators$3<TSelf, TSelf, TSelf>, System.INumber$1<TSelf>, System.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.IAdditiveIdentity$2<TSelf, TSelf>, System.IComparisonOperators$2<TSelf, TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.IEqualityOperators$2<TSelf, TSelf>, System.IEquatable$1<TSelf>, System.IDecrementOperators$1<TSelf>, System.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IIncrementOperators$1<TSelf>, System.IModulusOperators$3<TSelf, TSelf, TSelf>, System.IMultiplicativeIdentity$2<TSelf, TSelf>, System.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParseable$1<TSelf>, System.IParseable$1<TSelf>, System.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUnaryPlusOperators$2<TSelf, TSelf>, System.IShiftOperators$2<TSelf, TSelf>
        {
            CompareTo ($obj: any) : number
            TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            ToString ($format: string, $formatProvider: System.IFormatProvider) : string
        }
        interface IBinaryNumber$1<TSelf> extends System.IBitwiseOperators$3<TSelf, TSelf, TSelf>, System.INumber$1<TSelf>, System.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.IAdditiveIdentity$2<TSelf, TSelf>, System.IComparisonOperators$2<TSelf, TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.IEqualityOperators$2<TSelf, TSelf>, System.IEquatable$1<TSelf>, System.IDecrementOperators$1<TSelf>, System.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IIncrementOperators$1<TSelf>, System.IModulusOperators$3<TSelf, TSelf, TSelf>, System.IMultiplicativeIdentity$2<TSelf, TSelf>, System.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParseable$1<TSelf>, System.IParseable$1<TSelf>, System.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUnaryPlusOperators$2<TSelf, TSelf>
        {
            CompareTo ($obj: any) : number
            TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            ToString ($format: string, $formatProvider: System.IFormatProvider) : string
        }
        interface IBitwiseOperators$3<TSelf, TOther, TResult>
        {
        }
        interface INumber$1<TSelf> extends System.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.IAdditiveIdentity$2<TSelf, TSelf>, System.IComparisonOperators$2<TSelf, TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.IEqualityOperators$2<TSelf, TSelf>, System.IEquatable$1<TSelf>, System.IDecrementOperators$1<TSelf>, System.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IIncrementOperators$1<TSelf>, System.IModulusOperators$3<TSelf, TSelf, TSelf>, System.IMultiplicativeIdentity$2<TSelf, TSelf>, System.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParseable$1<TSelf>, System.IParseable$1<TSelf>, System.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUnaryPlusOperators$2<TSelf, TSelf>
        {
            CompareTo ($obj: any) : number
            TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            ToString ($format: string, $formatProvider: System.IFormatProvider) : string
        }
        interface IAdditionOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IAdditiveIdentity$2<TSelf, TResult>
        {
        }
        interface IComparisonOperators$2<TSelf, TOther> extends System.IComparable, System.IComparable$1<TOther>, System.IEqualityOperators$2<TSelf, TOther>, System.IEquatable$1<TOther>
        {
            CompareTo ($obj: any) : number
        }
        interface IEqualityOperators$2<TSelf, TOther> extends System.IEquatable$1<TOther>
        {
        }
        interface IDecrementOperators$1<TSelf>
        {
        }
        interface IDivisionOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IIncrementOperators$1<TSelf>
        {
        }
        interface IModulusOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IMultiplicativeIdentity$2<TSelf, TResult>
        {
        }
        interface IMultiplyOperators$3<TSelf, TOther, TResult>
        {
        }
        interface ISpanParseable$1<TSelf> extends System.IParseable$1<TSelf>
        {
        }
        interface IParseable$1<TSelf>
        {
        }
        interface ISubtractionOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IUnaryNegationOperators$2<TSelf, TResult>
        {
        }
        interface IUnaryPlusOperators$2<TSelf, TResult>
        {
        }
        interface IShiftOperators$2<TSelf, TResult>
        {
        }
        interface IMinMaxValue$1<TSelf>
        {
        }
        interface ISignedNumber$1<TSelf> extends System.INumber$1<TSelf>, System.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.IAdditiveIdentity$2<TSelf, TSelf>, System.IComparisonOperators$2<TSelf, TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.IEqualityOperators$2<TSelf, TSelf>, System.IEquatable$1<TSelf>, System.IDecrementOperators$1<TSelf>, System.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IIncrementOperators$1<TSelf>, System.IModulusOperators$3<TSelf, TSelf, TSelf>, System.IMultiplicativeIdentity$2<TSelf, TSelf>, System.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParseable$1<TSelf>, System.IParseable$1<TSelf>, System.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUnaryPlusOperators$2<TSelf, TSelf>
        {
            CompareTo ($obj: any) : number
            TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            ToString ($format: string, $formatProvider: System.IFormatProvider) : string
        }
        class Int64 extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<bigint>, System.IEquatable$1<bigint>, System.IBinaryInteger$1<bigint>, System.IBinaryNumber$1<bigint>, System.IBitwiseOperators$3<bigint, bigint, bigint>, System.INumber$1<bigint>, System.IAdditionOperators$3<bigint, bigint, bigint>, System.IAdditiveIdentity$2<bigint, bigint>, System.IComparisonOperators$2<bigint, bigint>, System.IEqualityOperators$2<bigint, bigint>, System.IDecrementOperators$1<bigint>, System.IDivisionOperators$3<bigint, bigint, bigint>, System.IIncrementOperators$1<bigint>, System.IModulusOperators$3<bigint, bigint, bigint>, System.IMultiplicativeIdentity$2<bigint, bigint>, System.IMultiplyOperators$3<bigint, bigint, bigint>, System.ISpanParseable$1<bigint>, System.IParseable$1<bigint>, System.ISubtractionOperators$3<bigint, bigint, bigint>, System.IUnaryNegationOperators$2<bigint, bigint>, System.IUnaryPlusOperators$2<bigint, bigint>, System.IShiftOperators$2<bigint, bigint>, System.IMinMaxValue$1<bigint>, System.ISignedNumber$1<bigint>
        {
            public static MaxValue : bigint
            public static MinValue : bigint
            public CompareTo ($value: any) : number
            public CompareTo ($value: bigint) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: bigint) : boolean
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider) : boolean
            public static Parse ($s: string) : bigint
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : bigint
            public static Parse ($s: string, $provider: System.IFormatProvider) : bigint
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : bigint
            public static Parse ($s: System.ReadOnlySpan$1<number>, $style?: System.Globalization.NumberStyles, $provider?: System.IFormatProvider) : bigint
            public static TryParse ($s: string, $result: $Ref<bigint>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<bigint>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<bigint>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<bigint>) : boolean
            public GetTypeCode () : System.TypeCode
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class Boolean extends System.ValueType implements System.IComparable, System.IConvertible, System.IComparable$1<boolean>, System.IEquatable$1<boolean>
        {
            public static TrueString : string
            public static FalseString : string
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>) : boolean
            public Equals ($obj: any) : boolean
            public Equals ($obj: boolean) : boolean
            public CompareTo ($obj: any) : number
            public CompareTo ($value: boolean) : number
            public static Parse ($value: string) : boolean
            public static Parse ($value: System.ReadOnlySpan$1<number>) : boolean
            public static TryParse ($value: string, $result: $Ref<boolean>) : boolean
            public static TryParse ($value: System.ReadOnlySpan$1<number>, $result: $Ref<boolean>) : boolean
            public GetTypeCode () : System.TypeCode
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static Equals ($objA: any, $objB: any) : boolean
        }
        interface Predicate$1<T>
        { (obj: T) : boolean; }
        interface MulticastDelegate
        { (...args:any[]) : any; }
        var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }
        class Delegate extends System.Object implements System.ICloneable, System.Runtime.Serialization.ISerializable
        {
            public get Target(): any;
            public get Method(): System.Reflection.MethodInfo;
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public GetInvocationList () : System.Array$1<Function>
            public static CreateDelegate ($type: System.Type, $target: any, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
            public Clone () : any
            public static Combine ($a: Function, $b: Function) : Function
            public static Combine (...delegates: Function[]) : Function
            public static CreateDelegate ($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo) : Function
            public static CreateDelegate ($type: System.Type, $method: System.Reflection.MethodInfo) : Function
            public static CreateDelegate ($type: System.Type, $target: any, $method: string) : Function
            public static CreateDelegate ($type: System.Type, $target: any, $method: string, $ignoreCase: boolean) : Function
            public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string) : Function
            public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean) : Function
            public DynamicInvoke (...args: any[]) : any
            public static Remove ($source: Function, $value: Function) : Function
            public static RemoveAll ($source: Function, $value: Function) : Function
            public static op_Equality ($d1: Function, $d2: Function) : boolean
            public static op_Inequality ($d1: Function, $d2: Function) : boolean
        }
        interface Action$1<T>
        { (obj: T) : void; }
        interface Comparison$1<T>
        { (x: T, y: T) : number; }
        class Type extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider, System.Reflection.IReflect
        {
            public static Delimiter : number
            public static EmptyTypes : System.Array$1<System.Type>
            public static Missing : any
            public static FilterAttribute : System.Reflection.MemberFilter
            public static FilterName : System.Reflection.MemberFilter
            public static FilterNameIgnoreCase : System.Reflection.MemberFilter
            public get IsInterface(): boolean;
            public get MemberType(): System.Reflection.MemberTypes;
            public get Namespace(): string;
            public get AssemblyQualifiedName(): string;
            public get FullName(): string;
            public get Assembly(): System.Reflection.Assembly;
            public get Module(): System.Reflection.Module;
            public get IsNested(): boolean;
            public get DeclaringType(): System.Type;
            public get DeclaringMethod(): System.Reflection.MethodBase;
            public get ReflectedType(): System.Type;
            public get UnderlyingSystemType(): System.Type;
            public get IsTypeDefinition(): boolean;
            public get IsArray(): boolean;
            public get IsByRef(): boolean;
            public get IsPointer(): boolean;
            public get IsConstructedGenericType(): boolean;
            public get IsGenericParameter(): boolean;
            public get IsGenericTypeParameter(): boolean;
            public get IsGenericMethodParameter(): boolean;
            public get IsGenericType(): boolean;
            public get IsGenericTypeDefinition(): boolean;
            public get IsSZArray(): boolean;
            public get IsVariableBoundArray(): boolean;
            public get IsByRefLike(): boolean;
            public get HasElementType(): boolean;
            public get GenericTypeArguments(): System.Array$1<System.Type>;
            public get GenericParameterPosition(): number;
            public get GenericParameterAttributes(): System.Reflection.GenericParameterAttributes;
            public get Attributes(): System.Reflection.TypeAttributes;
            public get IsAbstract(): boolean;
            public get IsImport(): boolean;
            public get IsSealed(): boolean;
            public get IsSpecialName(): boolean;
            public get IsClass(): boolean;
            public get IsNestedAssembly(): boolean;
            public get IsNestedFamANDAssem(): boolean;
            public get IsNestedFamily(): boolean;
            public get IsNestedFamORAssem(): boolean;
            public get IsNestedPrivate(): boolean;
            public get IsNestedPublic(): boolean;
            public get IsNotPublic(): boolean;
            public get IsPublic(): boolean;
            public get IsAutoLayout(): boolean;
            public get IsExplicitLayout(): boolean;
            public get IsLayoutSequential(): boolean;
            public get IsAnsiClass(): boolean;
            public get IsAutoClass(): boolean;
            public get IsUnicodeClass(): boolean;
            public get IsCOMObject(): boolean;
            public get IsContextful(): boolean;
            public get IsEnum(): boolean;
            public get IsMarshalByRef(): boolean;
            public get IsPrimitive(): boolean;
            public get IsValueType(): boolean;
            public get IsSignatureType(): boolean;
            public get IsSecurityCritical(): boolean;
            public get IsSecuritySafeCritical(): boolean;
            public get IsSecurityTransparent(): boolean;
            public get StructLayoutAttribute(): System.Runtime.InteropServices.StructLayoutAttribute;
            public get TypeInitializer(): System.Reflection.ConstructorInfo;
            public get TypeHandle(): System.RuntimeTypeHandle;
            public get GUID(): System.Guid;
            public get BaseType(): System.Type;
            public static get DefaultBinder(): System.Reflection.Binder;
            public get IsSerializable(): boolean;
            public get ContainsGenericParameters(): boolean;
            public get IsVisible(): boolean;
            public GetField ($name: string) : System.Reflection.FieldInfo
            public GetField ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.FieldInfo
            public GetFields () : System.Array$1<System.Reflection.FieldInfo>
            public GetFields ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.FieldInfo>
            public GetMember ($name: string) : System.Array$1<System.Reflection.MemberInfo>
            public GetMember ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMember ($name: string, $type: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMembers () : System.Array$1<System.Reflection.MemberInfo>
            public GetMemberWithSameMetadataDefinitionAs ($member: System.Reflection.MemberInfo) : System.Reflection.MemberInfo
            public GetMembers ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMethod ($name: string) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethods () : System.Array$1<System.Reflection.MethodInfo>
            public GetMethods ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MethodInfo>
            public GetNestedType ($name: string) : System.Type
            public GetNestedType ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Type
            public GetNestedTypes () : System.Array$1<System.Type>
            public GetNestedTypes ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Type>
            public GetProperty ($name: string) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $types: System.Array$1<System.Type>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.PropertyInfo
            public GetProperties () : System.Array$1<System.Reflection.PropertyInfo>
            public GetProperties ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.PropertyInfo>
            public GetDefaultMembers () : System.Array$1<System.Reflection.MemberInfo>
            public static GetTypeHandle ($o: any) : System.RuntimeTypeHandle
            public static GetTypeArray ($args: System.Array$1<any>) : System.Array$1<System.Type>
            public static GetTypeCode ($type: System.Type) : System.TypeCode
            public static GetTypeFromCLSID ($clsid: System.Guid) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $throwOnError: boolean) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $server: string) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $server: string, $throwOnError: boolean) : System.Type
            public static GetTypeFromProgID ($progID: string) : System.Type
            public static GetTypeFromProgID ($progID: string, $throwOnError: boolean) : System.Type
            public static GetTypeFromProgID ($progID: string, $server: string) : System.Type
            public static GetTypeFromProgID ($progID: string, $server: string, $throwOnError: boolean) : System.Type
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>) : any
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo) : any
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>, $culture: System.Globalization.CultureInfo, $namedParameters: System.Array$1<string>) : any
            public GetInterface ($name: string) : System.Type
            public GetInterface ($name: string, $ignoreCase: boolean) : System.Type
            public GetInterfaces () : System.Array$1<System.Type>
            public GetInterfaceMap ($interfaceType: System.Type) : System.Reflection.InterfaceMapping
            public IsInstanceOfType ($o: any) : boolean
            public IsEquivalentTo ($other: System.Type) : boolean
            public GetEnumUnderlyingType () : System.Type
            public GetEnumValues () : System.Array
            public MakeArrayType () : System.Type
            public MakeArrayType ($rank: number) : System.Type
            public MakeByRefType () : System.Type
            public MakeGenericType (...typeArguments: System.Type[]) : System.Type
            public MakePointerType () : System.Type
            public static MakeGenericSignatureType ($genericTypeDefinition: System.Type, ...typeArguments: System.Type[]) : System.Type
            public static MakeGenericMethodParameter ($position: number) : System.Type
            public Equals ($o: any) : boolean
            public Equals ($o: System.Type) : boolean
            public IsEnumDefined ($value: any) : boolean
            public GetEnumName ($value: any) : string
            public GetEnumNames () : System.Array$1<string>
            public FindInterfaces ($filter: System.Reflection.TypeFilter, $filterCriteria: any) : System.Array$1<System.Type>
            public FindMembers ($memberType: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags, $filter: System.Reflection.MemberFilter, $filterCriteria: any) : System.Array$1<System.Reflection.MemberInfo>
            public IsSubclassOf ($c: System.Type) : boolean
            public IsAssignableFrom ($c: System.Type) : boolean
            public static GetType ($typeName: string, $throwOnError: boolean, $ignoreCase: boolean) : System.Type
            public static GetType ($typeName: string, $throwOnError: boolean) : System.Type
            public static GetType ($typeName: string) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean, $ignoreCase: boolean) : System.Type
            public static GetTypeFromHandle ($handle: System.RuntimeTypeHandle) : System.Type
            public static op_Equality ($left: System.Type, $right: System.Type) : boolean
            public static op_Inequality ($left: System.Type, $right: System.Type) : boolean
            public GetType () : System.Type
            public GetElementType () : System.Type
            public GetArrayRank () : number
            public GetGenericTypeDefinition () : System.Type
            public GetGenericArguments () : System.Array$1<System.Type>
            public GetGenericParameterConstraints () : System.Array$1<System.Type>
            public IsAssignableTo ($targetType: System.Type) : boolean
            public GetConstructor ($types: System.Array$1<System.Type>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $types: System.Array$1<System.Type>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.ConstructorInfo
            public GetConstructors () : System.Array$1<System.Reflection.ConstructorInfo>
            public GetConstructors ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.ConstructorInfo>
            public GetEvent ($name: string) : System.Reflection.EventInfo
            public GetEvent ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.EventInfo
            public GetEvents () : System.Array$1<System.Reflection.EventInfo>
            public GetEvents ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.EventInfo>
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
        }
        interface Converter$2<TInput, TOutput>
        { (input: TInput) : TOutput; }
        class Attribute extends System.Object
        {
            public get TypeId(): any;
            public static GetCustomAttributes ($element: System.Reflection.MemberInfo, $attributeType: System.Type) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.MemberInfo, $attributeType: System.Type, $inherit: boolean) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.MemberInfo) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.MemberInfo, $inherit: boolean) : System.Array$1<System.Attribute>
            public static IsDefined ($element: System.Reflection.MemberInfo, $attributeType: System.Type) : boolean
            public static IsDefined ($element: System.Reflection.MemberInfo, $attributeType: System.Type, $inherit: boolean) : boolean
            public static GetCustomAttribute ($element: System.Reflection.MemberInfo, $attributeType: System.Type) : System.Attribute
            public static GetCustomAttribute ($element: System.Reflection.MemberInfo, $attributeType: System.Type, $inherit: boolean) : System.Attribute
            public static GetCustomAttributes ($element: System.Reflection.ParameterInfo) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.ParameterInfo, $attributeType: System.Type) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.ParameterInfo, $attributeType: System.Type, $inherit: boolean) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.ParameterInfo, $inherit: boolean) : System.Array$1<System.Attribute>
            public static IsDefined ($element: System.Reflection.ParameterInfo, $attributeType: System.Type) : boolean
            public static IsDefined ($element: System.Reflection.ParameterInfo, $attributeType: System.Type, $inherit: boolean) : boolean
            public static GetCustomAttribute ($element: System.Reflection.ParameterInfo, $attributeType: System.Type) : System.Attribute
            public static GetCustomAttribute ($element: System.Reflection.ParameterInfo, $attributeType: System.Type, $inherit: boolean) : System.Attribute
            public static GetCustomAttributes ($element: System.Reflection.Module, $attributeType: System.Type) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.Module) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.Module, $inherit: boolean) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.Module, $attributeType: System.Type, $inherit: boolean) : System.Array$1<System.Attribute>
            public static IsDefined ($element: System.Reflection.Module, $attributeType: System.Type) : boolean
            public static IsDefined ($element: System.Reflection.Module, $attributeType: System.Type, $inherit: boolean) : boolean
            public static GetCustomAttribute ($element: System.Reflection.Module, $attributeType: System.Type) : System.Attribute
            public static GetCustomAttribute ($element: System.Reflection.Module, $attributeType: System.Type, $inherit: boolean) : System.Attribute
            public static GetCustomAttributes ($element: System.Reflection.Assembly, $attributeType: System.Type) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.Assembly, $attributeType: System.Type, $inherit: boolean) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.Assembly) : System.Array$1<System.Attribute>
            public static GetCustomAttributes ($element: System.Reflection.Assembly, $inherit: boolean) : System.Array$1<System.Attribute>
            public static IsDefined ($element: System.Reflection.Assembly, $attributeType: System.Type) : boolean
            public static IsDefined ($element: System.Reflection.Assembly, $attributeType: System.Type, $inherit: boolean) : boolean
            public static GetCustomAttribute ($element: System.Reflection.Assembly, $attributeType: System.Type) : System.Attribute
            public static GetCustomAttribute ($element: System.Reflection.Assembly, $attributeType: System.Type, $inherit: boolean) : System.Attribute
            public Match ($obj: any) : boolean
            public IsDefaultAttribute () : boolean
        }
        class BadImageFormatException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public get Message(): string;
            public get FileName(): string;
            public get FusionLog(): string;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $fileName: string)
            public constructor ($message: string, $fileName: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class SystemException extends System.Exception implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class Exception extends System.Object implements System.Runtime.Serialization.ISerializable
        {
            public get TargetSite(): System.Reflection.MethodBase;
            public get Message(): string;
            public get Data(): System.Collections.IDictionary;
            public get InnerException(): System.Exception;
            public get HelpLink(): string;
            public set HelpLink(value: string);
            public get Source(): string;
            public set Source(value: string);
            public get HResult(): number;
            public set HResult(value: number);
            public get StackTrace(): string;
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public GetBaseException () : System.Exception
            public GetType () : System.Type
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class String extends System.Object implements System.IComparable, System.Collections.IEnumerable, System.IConvertible, System.Collections.Generic.IEnumerable$1<number>, System.IComparable$1<string>, System.IEquatable$1<string>, System.ICloneable
        {
            public static Empty : string
            public get Chars(): number;
            public get Length(): number;
            public LastIndexOf ($value: string, $startIndex: number) : number
            public LastIndexOf ($value: string, $startIndex: number, $count: number) : number
            public LastIndexOf ($value: string, $comparisonType: System.StringComparison) : number
            public LastIndexOf ($value: string, $startIndex: number, $comparisonType: System.StringComparison) : number
            public LastIndexOf ($value: string, $startIndex: number, $count: number, $comparisonType: System.StringComparison) : number
            public PadRight ($totalWidth: number) : string
            public PadRight ($totalWidth: number, $paddingChar: number) : string
            public Remove ($startIndex: number, $count: number) : string
            public Remove ($startIndex: number) : string
            public Replace ($oldValue: string, $newValue: string, $ignoreCase: boolean, $culture: System.Globalization.CultureInfo) : string
            public Replace ($oldValue: string, $newValue: string, $comparisonType: System.StringComparison) : string
            public Replace ($oldChar: number, $newChar: number) : string
            public Replace ($oldValue: string, $newValue: string) : string
            public ReplaceLineEndings () : string
            public ReplaceLineEndings ($replacementText: string) : string
            public Split ($separator: number, $options?: System.StringSplitOptions) : System.Array$1<string>
            public Split ($separator: number, $count: number, $options?: System.StringSplitOptions) : System.Array$1<string>
            public Split (...separator: number[]) : System.Array$1<string>
            public Split ($separator: System.Array$1<number>, $count: number) : System.Array$1<string>
            public Split ($separator: System.Array$1<number>, $options: System.StringSplitOptions) : System.Array$1<string>
            public Split ($separator: System.Array$1<number>, $count: number, $options: System.StringSplitOptions) : System.Array$1<string>
            public Split ($separator: string, $options?: System.StringSplitOptions) : System.Array$1<string>
            public Split ($separator: string, $count: number, $options?: System.StringSplitOptions) : System.Array$1<string>
            public Split ($separator: System.Array$1<string>, $options: System.StringSplitOptions) : System.Array$1<string>
            public Split ($separator: System.Array$1<string>, $count: number, $options: System.StringSplitOptions) : System.Array$1<string>
            public Substring ($startIndex: number) : string
            public Substring ($startIndex: number, $length: number) : string
            public ToLower () : string
            public ToLower ($culture: System.Globalization.CultureInfo) : string
            public ToLowerInvariant () : string
            public ToUpper () : string
            public ToUpper ($culture: System.Globalization.CultureInfo) : string
            public ToUpperInvariant () : string
            public Trim () : string
            public Trim ($trimChar: number) : string
            public Trim (...trimChars: number[]) : string
            public TrimStart () : string
            public TrimStart ($trimChar: number) : string
            public TrimStart (...trimChars: number[]) : string
            public TrimEnd () : string
            public TrimEnd ($trimChar: number) : string
            public TrimEnd (...trimChars: number[]) : string
            public Contains ($value: string) : boolean
            public Contains ($value: string, $comparisonType: System.StringComparison) : boolean
            public Contains ($value: number) : boolean
            public Contains ($value: number, $comparisonType: System.StringComparison) : boolean
            public IndexOf ($value: number) : number
            public IndexOf ($value: number, $startIndex: number) : number
            public IndexOf ($value: number, $comparisonType: System.StringComparison) : number
            public IndexOf ($value: number, $startIndex: number, $count: number) : number
            public IndexOfAny ($anyOf: System.Array$1<number>) : number
            public IndexOfAny ($anyOf: System.Array$1<number>, $startIndex: number) : number
            public IndexOfAny ($anyOf: System.Array$1<number>, $startIndex: number, $count: number) : number
            public IndexOf ($value: string) : number
            public IndexOf ($value: string, $startIndex: number) : number
            public IndexOf ($value: string, $startIndex: number, $count: number) : number
            public IndexOf ($value: string, $comparisonType: System.StringComparison) : number
            public IndexOf ($value: string, $startIndex: number, $comparisonType: System.StringComparison) : number
            public IndexOf ($value: string, $startIndex: number, $count: number, $comparisonType: System.StringComparison) : number
            public LastIndexOf ($value: number) : number
            public LastIndexOf ($value: number, $startIndex: number) : number
            public LastIndexOf ($value: number, $startIndex: number, $count: number) : number
            public LastIndexOfAny ($anyOf: System.Array$1<number>) : number
            public LastIndexOfAny ($anyOf: System.Array$1<number>, $startIndex: number) : number
            public LastIndexOfAny ($anyOf: System.Array$1<number>, $startIndex: number, $count: number) : number
            public LastIndexOf ($value: string) : number
            public static IsNullOrEmpty ($value: string) : boolean
            public static IsNullOrWhiteSpace ($value: string) : boolean
            public GetPinnableReference () : $Ref<number>
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public GetEnumerator () : System.CharEnumerator
            public EnumerateRunes () : System.Text.StringRuneEnumerator
            public GetTypeCode () : System.TypeCode
            public IsNormalized () : boolean
            public IsNormalized ($normalizationForm: System.Text.NormalizationForm) : boolean
            public Normalize () : string
            public Normalize ($normalizationForm: System.Text.NormalizationForm) : string
            public get_Chars ($index: number) : number
            public static Concat ($arg0: any) : string
            public static Concat ($arg0: any, $arg1: any) : string
            public static Concat ($arg0: any, $arg1: any, $arg2: any) : string
            public static Concat (...args: any[]) : string
            public static Concat ($values: System.Collections.Generic.IEnumerable$1<string>) : string
            public static Concat ($str0: string, $str1: string) : string
            public static Concat ($str0: string, $str1: string, $str2: string) : string
            public static Concat ($str0: string, $str1: string, $str2: string, $str3: string) : string
            public static Concat ($str0: System.ReadOnlySpan$1<number>, $str1: System.ReadOnlySpan$1<number>) : string
            public static Concat ($str0: System.ReadOnlySpan$1<number>, $str1: System.ReadOnlySpan$1<number>, $str2: System.ReadOnlySpan$1<number>) : string
            public static Concat ($str0: System.ReadOnlySpan$1<number>, $str1: System.ReadOnlySpan$1<number>, $str2: System.ReadOnlySpan$1<number>, $str3: System.ReadOnlySpan$1<number>) : string
            public static Concat (...values: string[]) : string
            public static Format ($format: string, $arg0: any) : string
            public static Format ($format: string, $arg0: any, $arg1: any) : string
            public static Format ($format: string, $arg0: any, $arg1: any, $arg2: any) : string
            public static Format ($format: string, ...args: any[]) : string
            public static Format ($provider: System.IFormatProvider, $format: string, $arg0: any) : string
            public static Format ($provider: System.IFormatProvider, $format: string, $arg0: any, $arg1: any) : string
            public static Format ($provider: System.IFormatProvider, $format: string, $arg0: any, $arg1: any, $arg2: any) : string
            public static Format ($provider: System.IFormatProvider, $format: string, ...args: any[]) : string
            public Insert ($startIndex: number, $value: string) : string
            public static Join ($separator: number, ...value: string[]) : string
            public static Join ($separator: string, ...value: string[]) : string
            public static Join ($separator: number, $value: System.Array$1<string>, $startIndex: number, $count: number) : string
            public static Join ($separator: string, $value: System.Array$1<string>, $startIndex: number, $count: number) : string
            public static Join ($separator: string, $values: System.Collections.Generic.IEnumerable$1<string>) : string
            public static Join ($separator: number, ...values: any[]) : string
            public static Join ($separator: string, ...values: any[]) : string
            public PadLeft ($totalWidth: number) : string
            public PadLeft ($totalWidth: number, $paddingChar: number) : string
            public static Intern ($str: string) : string
            public static IsInterned ($str: string) : string
            public static Compare ($strA: string, $strB: string) : number
            public static Compare ($strA: string, $strB: string, $ignoreCase: boolean) : number
            public static Compare ($strA: string, $strB: string, $comparisonType: System.StringComparison) : number
            public static Compare ($strA: string, $strB: string, $culture: System.Globalization.CultureInfo, $options: System.Globalization.CompareOptions) : number
            public static Compare ($strA: string, $strB: string, $ignoreCase: boolean, $culture: System.Globalization.CultureInfo) : number
            public static Compare ($strA: string, $indexA: number, $strB: string, $indexB: number, $length: number) : number
            public static Compare ($strA: string, $indexA: number, $strB: string, $indexB: number, $length: number, $ignoreCase: boolean) : number
            public static Compare ($strA: string, $indexA: number, $strB: string, $indexB: number, $length: number, $ignoreCase: boolean, $culture: System.Globalization.CultureInfo) : number
            public static Compare ($strA: string, $indexA: number, $strB: string, $indexB: number, $length: number, $culture: System.Globalization.CultureInfo, $options: System.Globalization.CompareOptions) : number
            public static Compare ($strA: string, $indexA: number, $strB: string, $indexB: number, $length: number, $comparisonType: System.StringComparison) : number
            public static CompareOrdinal ($strA: string, $strB: string) : number
            public static CompareOrdinal ($strA: string, $indexA: number, $strB: string, $indexB: number, $length: number) : number
            public CompareTo ($value: any) : number
            public CompareTo ($strB: string) : number
            public EndsWith ($value: string) : boolean
            public EndsWith ($value: string, $comparisonType: System.StringComparison) : boolean
            public EndsWith ($value: string, $ignoreCase: boolean, $culture: System.Globalization.CultureInfo) : boolean
            public EndsWith ($value: number) : boolean
            public Equals ($obj: any) : boolean
            public Equals ($value: string) : boolean
            public Equals ($value: string, $comparisonType: System.StringComparison) : boolean
            public static Equals ($a: string, $b: string) : boolean
            public static Equals ($a: string, $b: string, $comparisonType: System.StringComparison) : boolean
            public static op_Equality ($a: string, $b: string) : boolean
            public static op_Inequality ($a: string, $b: string) : boolean
            public GetHashCode () : number
            public GetHashCode ($comparisonType: System.StringComparison) : number
            public static GetHashCode ($value: System.ReadOnlySpan$1<number>) : number
            public static GetHashCode ($value: System.ReadOnlySpan$1<number>, $comparisonType: System.StringComparison) : number
            public StartsWith ($value: string) : boolean
            public StartsWith ($value: string, $comparisonType: System.StringComparison) : boolean
            public StartsWith ($value: string, $ignoreCase: boolean, $culture: System.Globalization.CultureInfo) : boolean
            public StartsWith ($value: number) : boolean
            public static Create ($provider: System.IFormatProvider, $handler: $Ref<System.Runtime.CompilerServices.DefaultInterpolatedStringHandler>) : string
            public static Create ($provider: System.IFormatProvider, $initialBuffer: System.Span$1<number>, $handler: $Ref<System.Runtime.CompilerServices.DefaultInterpolatedStringHandler>) : string
            public static op_Implicit ($value: string) : System.ReadOnlySpan$1<number>
            public Clone () : any
            public static Copy ($str: string) : string
            public CopyTo ($sourceIndex: number, $destination: System.Array$1<number>, $destinationIndex: number, $count: number) : void
            public CopyTo ($destination: System.Span$1<number>) : void
            public TryCopyTo ($destination: System.Span$1<number>) : boolean
            public ToCharArray () : System.Array$1<number>
            public ToCharArray ($startIndex: number, $length: number) : System.Array$1<number>
            public constructor ($value: System.Array$1<number>)
            public constructor ($value: System.Array$1<number>, $startIndex: number, $length: number)
            public constructor ($c: number, $count: number)
            public constructor ($value: System.ReadOnlySpan$1<number>)
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        interface String {
            AsSpan () : System.ReadOnlySpan$1<number>;
            AsSpan ($start: number) : System.ReadOnlySpan$1<number>;
            AsSpan ($start: number, $length: number) : System.ReadOnlySpan$1<number>;
            AsMemory () : System.ReadOnlyMemory$1<number>;
            AsMemory ($start: number) : System.ReadOnlyMemory$1<number>;
            AsMemory ($startIndex: System.Index) : System.ReadOnlyMemory$1<number>;
            AsMemory ($start: number, $length: number) : System.ReadOnlyMemory$1<number>;
            AsMemory ($range: System.Range) : System.ReadOnlyMemory$1<number>;
            IsNormalized () : boolean;
            IsNormalized ($normalizationForm: System.Text.NormalizationForm) : boolean;
            Normalize () : string;
            Normalize ($normalizationForm: System.Text.NormalizationForm) : string;
        }
        class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IEquatable$1<number>, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IBinaryInteger$1<number>, System.IBinaryNumber$1<number>, System.IBitwiseOperators$3<number, number, number>, System.INumber$1<number>, System.IAdditionOperators$3<number, number, number>, System.IAdditiveIdentity$2<number, number>, System.IComparisonOperators$2<number, number>, System.IEqualityOperators$2<number, number>, System.IDecrementOperators$1<number>, System.IDivisionOperators$3<number, number, number>, System.IIncrementOperators$1<number>, System.IModulusOperators$3<number, number, number>, System.IMultiplicativeIdentity$2<number, number>, System.IMultiplyOperators$3<number, number, number>, System.ISpanParseable$1<number>, System.IParseable$1<number>, System.ISubtractionOperators$3<number, number, number>, System.IUnaryNegationOperators$2<number, number>, System.IUnaryPlusOperators$2<number, number>, System.IShiftOperators$2<number, number>, System.IMinMaxValue$1<number>, System.IUnsignedNumber$1<number>
        {
            public static MaxValue : number
            public static MinValue : number
            public static IsControl ($c: number) : boolean
            public static IsControl ($s: string, $index: number) : boolean
            public static IsDigit ($s: string, $index: number) : boolean
            public static IsLetter ($s: string, $index: number) : boolean
            public static IsLetterOrDigit ($s: string, $index: number) : boolean
            public static IsLower ($s: string, $index: number) : boolean
            public static IsNumber ($c: number) : boolean
            public static IsNumber ($s: string, $index: number) : boolean
            public static IsPunctuation ($s: string, $index: number) : boolean
            public static IsSeparator ($c: number) : boolean
            public static IsSeparator ($s: string, $index: number) : boolean
            public static IsSurrogate ($c: number) : boolean
            public static IsSurrogate ($s: string, $index: number) : boolean
            public static IsSymbol ($c: number) : boolean
            public static IsSymbol ($s: string, $index: number) : boolean
            public static IsUpper ($s: string, $index: number) : boolean
            public static IsWhiteSpace ($s: string, $index: number) : boolean
            public static GetUnicodeCategory ($c: number) : System.Globalization.UnicodeCategory
            public static GetUnicodeCategory ($s: string, $index: number) : System.Globalization.UnicodeCategory
            public static GetNumericValue ($c: number) : number
            public static GetNumericValue ($s: string, $index: number) : number
            public static IsHighSurrogate ($c: number) : boolean
            public static IsHighSurrogate ($s: string, $index: number) : boolean
            public static IsLowSurrogate ($c: number) : boolean
            public static IsLowSurrogate ($s: string, $index: number) : boolean
            public static IsSurrogatePair ($s: string, $index: number) : boolean
            public static IsSurrogatePair ($highSurrogate: number, $lowSurrogate: number) : boolean
            public static ConvertFromUtf32 ($utf32: number) : string
            public static ConvertToUtf32 ($highSurrogate: number, $lowSurrogate: number) : number
            public static ConvertToUtf32 ($s: string, $index: number) : number
            public static IsAscii ($c: number) : boolean
            public Equals ($obj: any) : boolean
            public Equals ($obj: number) : boolean
            public CompareTo ($value: any) : number
            public CompareTo ($value: number) : number
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public static ToString ($c: number) : string
            public static Parse ($s: string) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static IsDigit ($c: number) : boolean
            public static IsLetter ($c: number) : boolean
            public static IsWhiteSpace ($c: number) : boolean
            public static IsUpper ($c: number) : boolean
            public static IsLower ($c: number) : boolean
            public static IsPunctuation ($c: number) : boolean
            public static IsLetterOrDigit ($c: number) : boolean
            public static ToUpper ($c: number, $culture: System.Globalization.CultureInfo) : number
            public static ToUpper ($c: number) : number
            public static ToUpperInvariant ($c: number) : number
            public static ToLower ($c: number, $culture: System.Globalization.CultureInfo) : number
            public static ToLower ($c: number) : number
            public static ToLowerInvariant ($c: number) : number
            public GetTypeCode () : System.TypeCode
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static Equals ($objA: any, $objB: any) : boolean
        }
        interface IUnsignedNumber$1<TSelf> extends System.INumber$1<TSelf>, System.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.IAdditiveIdentity$2<TSelf, TSelf>, System.IComparisonOperators$2<TSelf, TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.IEqualityOperators$2<TSelf, TSelf>, System.IEquatable$1<TSelf>, System.IDecrementOperators$1<TSelf>, System.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IIncrementOperators$1<TSelf>, System.IModulusOperators$3<TSelf, TSelf, TSelf>, System.IMultiplicativeIdentity$2<TSelf, TSelf>, System.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParseable$1<TSelf>, System.IParseable$1<TSelf>, System.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUnaryPlusOperators$2<TSelf, TSelf>
        {
            CompareTo ($obj: any) : number
            TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            ToString ($format: string, $formatProvider: System.IFormatProvider) : string
        }
        class Buffer extends System.Object
        {
            public static BlockCopy ($src: System.Array, $srcOffset: number, $dst: System.Array, $dstOffset: number, $count: number) : void
            public static ByteLength ($array: System.Array) : number
            public static GetByte ($array: System.Array, $index: number) : number
            public static SetByte ($array: System.Array, $index: number, $value: number) : void
        }
        class Byte extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.IBinaryInteger$1<number>, System.IBinaryNumber$1<number>, System.IBitwiseOperators$3<number, number, number>, System.INumber$1<number>, System.IAdditionOperators$3<number, number, number>, System.IAdditiveIdentity$2<number, number>, System.IComparisonOperators$2<number, number>, System.IEqualityOperators$2<number, number>, System.IDecrementOperators$1<number>, System.IDivisionOperators$3<number, number, number>, System.IIncrementOperators$1<number>, System.IModulusOperators$3<number, number, number>, System.IMultiplicativeIdentity$2<number, number>, System.IMultiplyOperators$3<number, number, number>, System.ISpanParseable$1<number>, System.IParseable$1<number>, System.ISubtractionOperators$3<number, number, number>, System.IUnaryNegationOperators$2<number, number>, System.IUnaryPlusOperators$2<number, number>, System.IShiftOperators$2<number, number>, System.IMinMaxValue$1<number>, System.IUnsignedNumber$1<number>
        {
            public static MaxValue : number
            public static MinValue : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: number) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: number) : boolean
            public static Parse ($s: string) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : number
            public static Parse ($s: string, $provider: System.IFormatProvider) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : number
            public static Parse ($s: System.ReadOnlySpan$1<number>, $style?: System.Globalization.NumberStyles, $provider?: System.IFormatProvider) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<number>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider) : boolean
            public GetTypeCode () : System.TypeCode
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class UInt64 extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<bigint>, System.IEquatable$1<bigint>, System.IBinaryInteger$1<bigint>, System.IBinaryNumber$1<bigint>, System.IBitwiseOperators$3<bigint, bigint, bigint>, System.INumber$1<bigint>, System.IAdditionOperators$3<bigint, bigint, bigint>, System.IAdditiveIdentity$2<bigint, bigint>, System.IComparisonOperators$2<bigint, bigint>, System.IEqualityOperators$2<bigint, bigint>, System.IDecrementOperators$1<bigint>, System.IDivisionOperators$3<bigint, bigint, bigint>, System.IIncrementOperators$1<bigint>, System.IModulusOperators$3<bigint, bigint, bigint>, System.IMultiplicativeIdentity$2<bigint, bigint>, System.IMultiplyOperators$3<bigint, bigint, bigint>, System.ISpanParseable$1<bigint>, System.IParseable$1<bigint>, System.ISubtractionOperators$3<bigint, bigint, bigint>, System.IUnaryNegationOperators$2<bigint, bigint>, System.IUnaryPlusOperators$2<bigint, bigint>, System.IShiftOperators$2<bigint, bigint>, System.IMinMaxValue$1<bigint>, System.IUnsignedNumber$1<bigint>
        {
            public static MaxValue : bigint
            public static MinValue : bigint
            public CompareTo ($value: any) : number
            public CompareTo ($value: bigint) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: bigint) : boolean
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider) : boolean
            public static Parse ($s: string) : bigint
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : bigint
            public static Parse ($s: string, $provider: System.IFormatProvider) : bigint
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : bigint
            public static Parse ($s: System.ReadOnlySpan$1<number>, $style?: System.Globalization.NumberStyles, $provider?: System.IFormatProvider) : bigint
            public static TryParse ($s: string, $result: $Ref<bigint>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<bigint>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<bigint>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<bigint>) : boolean
            public GetTypeCode () : System.TypeCode
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class Decimal extends System.ValueType implements System.ISpanFormattable, System.IFormattable, System.IComparable, System.IConvertible, System.IComparable$1<System.Decimal>, System.IEquatable$1<System.Decimal>, System.Runtime.Serialization.ISerializable, System.Runtime.Serialization.IDeserializationCallback, System.IMinMaxValue$1<System.Decimal>, System.ISignedNumber$1<System.Decimal>, System.INumber$1<System.Decimal>, System.IAdditionOperators$3<System.Decimal, System.Decimal, System.Decimal>, System.IAdditiveIdentity$2<System.Decimal, System.Decimal>, System.IComparisonOperators$2<System.Decimal, System.Decimal>, System.IEqualityOperators$2<System.Decimal, System.Decimal>, System.IDecrementOperators$1<System.Decimal>, System.IDivisionOperators$3<System.Decimal, System.Decimal, System.Decimal>, System.IIncrementOperators$1<System.Decimal>, System.IModulusOperators$3<System.Decimal, System.Decimal, System.Decimal>, System.IMultiplicativeIdentity$2<System.Decimal, System.Decimal>, System.IMultiplyOperators$3<System.Decimal, System.Decimal, System.Decimal>, System.ISpanParseable$1<System.Decimal>, System.IParseable$1<System.Decimal>, System.ISubtractionOperators$3<System.Decimal, System.Decimal, System.Decimal>, System.IUnaryNegationOperators$2<System.Decimal, System.Decimal>, System.IUnaryPlusOperators$2<System.Decimal, System.Decimal>
        {
            public static Zero : System.Decimal
            public static One : System.Decimal
            public static MinusOne : System.Decimal
            public static MaxValue : System.Decimal
            public static MinValue : System.Decimal
            public static op_Implicit ($value: number) : System.Decimal
            public static op_Implicit ($value: bigint) : System.Decimal
            public static op_Explicit ($value: number) : System.Decimal
            public static op_Explicit ($value: System.Decimal) : number
            public static op_Explicit ($value: System.Decimal) : bigint
            public static op_UnaryPlus ($d: System.Decimal) : System.Decimal
            public static op_UnaryNegation ($d: System.Decimal) : System.Decimal
            public static op_Increment ($d: System.Decimal) : System.Decimal
            public static op_Decrement ($d: System.Decimal) : System.Decimal
            public static op_Addition ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static op_Subtraction ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static op_Multiply ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static op_Division ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static op_Modulus ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static op_Equality ($d1: System.Decimal, $d2: System.Decimal) : boolean
            public static op_Inequality ($d1: System.Decimal, $d2: System.Decimal) : boolean
            public static op_LessThan ($d1: System.Decimal, $d2: System.Decimal) : boolean
            public static op_LessThanOrEqual ($d1: System.Decimal, $d2: System.Decimal) : boolean
            public static op_GreaterThan ($d1: System.Decimal, $d2: System.Decimal) : boolean
            public static op_GreaterThanOrEqual ($d1: System.Decimal, $d2: System.Decimal) : boolean
            public GetTypeCode () : System.TypeCode
            public static FromOACurrency ($cy: bigint) : System.Decimal
            public static ToOACurrency ($value: System.Decimal) : bigint
            public static Add ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static Ceiling ($d: System.Decimal) : System.Decimal
            public static Compare ($d1: System.Decimal, $d2: System.Decimal) : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: System.Decimal) : number
            public static Divide ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public Equals ($value: any) : boolean
            public Equals ($value: System.Decimal) : boolean
            public static Equals ($d1: System.Decimal, $d2: System.Decimal) : boolean
            public static Floor ($d: System.Decimal) : System.Decimal
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider) : boolean
            public static Parse ($s: string) : System.Decimal
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : System.Decimal
            public static Parse ($s: string, $provider: System.IFormatProvider) : System.Decimal
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : System.Decimal
            public static Parse ($s: System.ReadOnlySpan$1<number>, $style?: System.Globalization.NumberStyles, $provider?: System.IFormatProvider) : System.Decimal
            public static TryParse ($s: string, $result: $Ref<System.Decimal>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<System.Decimal>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<System.Decimal>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<System.Decimal>) : boolean
            public static GetBits ($d: System.Decimal) : System.Array$1<number>
            public static GetBits ($d: System.Decimal, $destination: System.Span$1<number>) : number
            public static TryGetBits ($d: System.Decimal, $destination: System.Span$1<number>, $valuesWritten: $Ref<number>) : boolean
            public static Remainder ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static Multiply ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static Negate ($d: System.Decimal) : System.Decimal
            public static Round ($d: System.Decimal) : System.Decimal
            public static Round ($d: System.Decimal, $decimals: number) : System.Decimal
            public static Round ($d: System.Decimal, $mode: System.MidpointRounding) : System.Decimal
            public static Round ($d: System.Decimal, $decimals: number, $mode: System.MidpointRounding) : System.Decimal
            public static Subtract ($d1: System.Decimal, $d2: System.Decimal) : System.Decimal
            public static ToByte ($value: System.Decimal) : number
            public static ToSByte ($value: System.Decimal) : number
            public static ToInt16 ($value: System.Decimal) : number
            public static ToDouble ($d: System.Decimal) : number
            public static ToInt32 ($d: System.Decimal) : number
            public static ToInt64 ($d: System.Decimal) : bigint
            public static ToUInt16 ($value: System.Decimal) : number
            public static ToUInt32 ($d: System.Decimal) : number
            public static ToUInt64 ($d: System.Decimal) : bigint
            public static ToSingle ($d: System.Decimal) : number
            public static Truncate ($d: System.Decimal) : System.Decimal
            public constructor ($value: number)
            public constructor ($value: bigint)
            public constructor ($bits: System.Array$1<number>)
            public constructor ($bits: System.ReadOnlySpan$1<number>)
            public constructor ($lo: number, $mid: number, $hi: number, $isNegative: boolean, $scale: number)
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class Int16 extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.IBinaryInteger$1<number>, System.IBinaryNumber$1<number>, System.IBitwiseOperators$3<number, number, number>, System.INumber$1<number>, System.IAdditionOperators$3<number, number, number>, System.IAdditiveIdentity$2<number, number>, System.IComparisonOperators$2<number, number>, System.IEqualityOperators$2<number, number>, System.IDecrementOperators$1<number>, System.IDivisionOperators$3<number, number, number>, System.IIncrementOperators$1<number>, System.IModulusOperators$3<number, number, number>, System.IMultiplicativeIdentity$2<number, number>, System.IMultiplyOperators$3<number, number, number>, System.ISpanParseable$1<number>, System.IParseable$1<number>, System.ISubtractionOperators$3<number, number, number>, System.IUnaryNegationOperators$2<number, number>, System.IUnaryPlusOperators$2<number, number>, System.IShiftOperators$2<number, number>, System.IMinMaxValue$1<number>, System.ISignedNumber$1<number>
        {
            public static MaxValue : number
            public static MinValue : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: number) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: number) : boolean
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider) : boolean
            public static Parse ($s: string) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : number
            public static Parse ($s: string, $provider: System.IFormatProvider) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : number
            public static Parse ($s: System.ReadOnlySpan$1<number>, $style?: System.Globalization.NumberStyles, $provider?: System.IFormatProvider) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<number>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public GetTypeCode () : System.TypeCode
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class UInt16 extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.IBinaryInteger$1<number>, System.IBinaryNumber$1<number>, System.IBitwiseOperators$3<number, number, number>, System.INumber$1<number>, System.IAdditionOperators$3<number, number, number>, System.IAdditiveIdentity$2<number, number>, System.IComparisonOperators$2<number, number>, System.IEqualityOperators$2<number, number>, System.IDecrementOperators$1<number>, System.IDivisionOperators$3<number, number, number>, System.IIncrementOperators$1<number>, System.IModulusOperators$3<number, number, number>, System.IMultiplicativeIdentity$2<number, number>, System.IMultiplyOperators$3<number, number, number>, System.ISpanParseable$1<number>, System.IParseable$1<number>, System.ISubtractionOperators$3<number, number, number>, System.IUnaryNegationOperators$2<number, number>, System.IUnaryPlusOperators$2<number, number>, System.IShiftOperators$2<number, number>, System.IMinMaxValue$1<number>, System.IUnsignedNumber$1<number>
        {
            public static MaxValue : number
            public static MinValue : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: number) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: number) : boolean
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider) : boolean
            public static Parse ($s: string) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : number
            public static Parse ($s: string, $provider: System.IFormatProvider) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : number
            public static Parse ($s: System.ReadOnlySpan$1<number>, $style?: System.Globalization.NumberStyles, $provider?: System.IFormatProvider) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<number>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public GetTypeCode () : System.TypeCode
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class UInt32 extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.IBinaryInteger$1<number>, System.IBinaryNumber$1<number>, System.IBitwiseOperators$3<number, number, number>, System.INumber$1<number>, System.IAdditionOperators$3<number, number, number>, System.IAdditiveIdentity$2<number, number>, System.IComparisonOperators$2<number, number>, System.IEqualityOperators$2<number, number>, System.IDecrementOperators$1<number>, System.IDivisionOperators$3<number, number, number>, System.IIncrementOperators$1<number>, System.IModulusOperators$3<number, number, number>, System.IMultiplicativeIdentity$2<number, number>, System.IMultiplyOperators$3<number, number, number>, System.ISpanParseable$1<number>, System.IParseable$1<number>, System.ISubtractionOperators$3<number, number, number>, System.IUnaryNegationOperators$2<number, number>, System.IUnaryPlusOperators$2<number, number>, System.IShiftOperators$2<number, number>, System.IMinMaxValue$1<number>, System.IUnsignedNumber$1<number>
        {
            public static MaxValue : number
            public static MinValue : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: number) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: number) : boolean
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider) : boolean
            public static Parse ($s: string) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : number
            public static Parse ($s: string, $provider: System.IFormatProvider) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : number
            public static Parse ($s: System.ReadOnlySpan$1<number>, $style?: System.Globalization.NumberStyles, $provider?: System.IFormatProvider) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<number>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public GetTypeCode () : System.TypeCode
            public CompareTo ($obj: any) : number
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class Single extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.IBinaryFloatingPoint$1<number>, System.IBinaryNumber$1<number>, System.IBitwiseOperators$3<number, number, number>, System.INumber$1<number>, System.IAdditionOperators$3<number, number, number>, System.IAdditiveIdentity$2<number, number>, System.IComparisonOperators$2<number, number>, System.IEqualityOperators$2<number, number>, System.IDecrementOperators$1<number>, System.IDivisionOperators$3<number, number, number>, System.IIncrementOperators$1<number>, System.IModulusOperators$3<number, number, number>, System.IMultiplicativeIdentity$2<number, number>, System.IMultiplyOperators$3<number, number, number>, System.ISpanParseable$1<number>, System.IParseable$1<number>, System.ISubtractionOperators$3<number, number, number>, System.IUnaryNegationOperators$2<number, number>, System.IUnaryPlusOperators$2<number, number>, System.IFloatingPoint$1<number>, System.ISignedNumber$1<number>, System.IMinMaxValue$1<number>
        {
            public CompareTo ($obj: any) : number
            public GetTypeCode () : System.TypeCode
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToString ($provider: System.IFormatProvider) : string
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public ToString () : string
        }
        interface IBinaryFloatingPoint$1<TSelf> extends System.IBinaryNumber$1<TSelf>, System.IBitwiseOperators$3<TSelf, TSelf, TSelf>, System.INumber$1<TSelf>, System.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.IAdditiveIdentity$2<TSelf, TSelf>, System.IComparisonOperators$2<TSelf, TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.IEqualityOperators$2<TSelf, TSelf>, System.IEquatable$1<TSelf>, System.IDecrementOperators$1<TSelf>, System.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IIncrementOperators$1<TSelf>, System.IModulusOperators$3<TSelf, TSelf, TSelf>, System.IMultiplicativeIdentity$2<TSelf, TSelf>, System.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParseable$1<TSelf>, System.IParseable$1<TSelf>, System.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUnaryPlusOperators$2<TSelf, TSelf>, System.IFloatingPoint$1<TSelf>, System.ISignedNumber$1<TSelf>
        {
            CompareTo ($obj: any) : number
            TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            ToString ($format: string, $formatProvider: System.IFormatProvider) : string
        }
        interface IFloatingPoint$1<TSelf> extends System.ISignedNumber$1<TSelf>, System.INumber$1<TSelf>, System.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.IAdditiveIdentity$2<TSelf, TSelf>, System.IComparisonOperators$2<TSelf, TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.IEqualityOperators$2<TSelf, TSelf>, System.IEquatable$1<TSelf>, System.IDecrementOperators$1<TSelf>, System.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IIncrementOperators$1<TSelf>, System.IModulusOperators$3<TSelf, TSelf, TSelf>, System.IMultiplicativeIdentity$2<TSelf, TSelf>, System.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParseable$1<TSelf>, System.IParseable$1<TSelf>, System.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUnaryPlusOperators$2<TSelf, TSelf>
        {
            CompareTo ($obj: any) : number
            TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            ToString ($format: string, $formatProvider: System.IFormatProvider) : string
        }
        class Double extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.IBinaryFloatingPoint$1<number>, System.IBinaryNumber$1<number>, System.IBitwiseOperators$3<number, number, number>, System.INumber$1<number>, System.IAdditionOperators$3<number, number, number>, System.IAdditiveIdentity$2<number, number>, System.IComparisonOperators$2<number, number>, System.IEqualityOperators$2<number, number>, System.IDecrementOperators$1<number>, System.IDivisionOperators$3<number, number, number>, System.IIncrementOperators$1<number>, System.IModulusOperators$3<number, number, number>, System.IMultiplicativeIdentity$2<number, number>, System.IMultiplyOperators$3<number, number, number>, System.ISpanParseable$1<number>, System.IParseable$1<number>, System.ISubtractionOperators$3<number, number, number>, System.IUnaryNegationOperators$2<number, number>, System.IUnaryPlusOperators$2<number, number>, System.IFloatingPoint$1<number>, System.ISignedNumber$1<number>, System.IMinMaxValue$1<number>
        {
            public CompareTo ($obj: any) : number
            public GetTypeCode () : System.TypeCode
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToString ($provider: System.IFormatProvider) : string
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public ToString () : string
        }
        class SByte extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.IBinaryInteger$1<number>, System.IBinaryNumber$1<number>, System.IBitwiseOperators$3<number, number, number>, System.INumber$1<number>, System.IAdditionOperators$3<number, number, number>, System.IAdditiveIdentity$2<number, number>, System.IComparisonOperators$2<number, number>, System.IEqualityOperators$2<number, number>, System.IDecrementOperators$1<number>, System.IDivisionOperators$3<number, number, number>, System.IIncrementOperators$1<number>, System.IModulusOperators$3<number, number, number>, System.IMultiplicativeIdentity$2<number, number>, System.IMultiplyOperators$3<number, number, number>, System.ISpanParseable$1<number>, System.IParseable$1<number>, System.ISubtractionOperators$3<number, number, number>, System.IUnaryNegationOperators$2<number, number>, System.IUnaryPlusOperators$2<number, number>, System.IShiftOperators$2<number, number>, System.IMinMaxValue$1<number>, System.ISignedNumber$1<number>
        {
            public static MaxValue : number
            public static MinValue : number
            public CompareTo ($obj: any) : number
            public CompareTo ($value: number) : number
            public Equals ($obj: any) : boolean
            public Equals ($obj: number) : boolean
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider) : boolean
            public static Parse ($s: string) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : number
            public static Parse ($s: string, $provider: System.IFormatProvider) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : number
            public static Parse ($s: System.ReadOnlySpan$1<number>, $style?: System.Globalization.NumberStyles, $provider?: System.IFormatProvider) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<number>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public GetTypeCode () : System.TypeCode
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static Equals ($objA: any, $objB: any) : boolean
        }
        enum TypeCode
        { Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        class Enum extends System.ValueType implements System.IComparable, System.IFormattable, System.IConvertible
        {
            public static ToObject ($enumType: System.Type, $value: number) : any
            public static ToObject ($enumType: System.Type, $value: bigint) : any
            public static GetName ($enumType: System.Type, $value: any) : string
            public static GetNames ($enumType: System.Type) : System.Array$1<string>
            public static GetUnderlyingType ($enumType: System.Type) : System.Type
            public static GetValues ($enumType: System.Type) : System.Array
            public HasFlag ($flag: System.Enum) : boolean
            public static IsDefined ($enumType: System.Type, $value: any) : boolean
            public static Parse ($enumType: System.Type, $value: string) : any
            public static Parse ($enumType: System.Type, $value: System.ReadOnlySpan$1<number>) : any
            public static Parse ($enumType: System.Type, $value: string, $ignoreCase: boolean) : any
            public static Parse ($enumType: System.Type, $value: System.ReadOnlySpan$1<number>, $ignoreCase: boolean) : any
            public static TryParse ($enumType: System.Type, $value: string, $result: $Ref<any>) : boolean
            public static TryParse ($enumType: System.Type, $value: System.ReadOnlySpan$1<number>, $result: $Ref<any>) : boolean
            public static TryParse ($enumType: System.Type, $value: string, $ignoreCase: boolean, $result: $Ref<any>) : boolean
            public static TryParse ($enumType: System.Type, $value: System.ReadOnlySpan$1<number>, $ignoreCase: boolean, $result: $Ref<any>) : boolean
            public static ToObject ($enumType: System.Type, $value: any) : any
            public static Format ($enumType: System.Type, $value: any, $format: string) : string
            public ToString () : string
            public CompareTo ($target: any) : number
            public ToString ($format: string) : string
            public GetTypeCode () : System.TypeCode
            public CompareTo ($obj: any) : number
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToString ($provider: System.IFormatProvider) : string
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
        }
        interface IFormatProvider
        {
            GetFormat ($formatType: System.Type) : any
        }
        class Span$1<T> extends System.ValueType
        {
        }
        class ReadOnlySpan$1<T> extends System.ValueType
        {
        }
        enum MidpointRounding
        { ToEven = 0, AwayFromZero = 1, ToZero = 2, ToNegativeInfinity = 3, ToPositiveInfinity = 4 }
        class Environment extends System.Object
        {
            public static get CurrentManagedThreadId(): number;
            public static get ExitCode(): number;
            public static set ExitCode(value: number);
            public static get TickCount(): number;
            public static get TickCount64(): bigint;
            public static get ProcessorCount(): number;
            public static get HasShutdownStarted(): boolean;
            public static get CommandLine(): string;
            public static get CurrentDirectory(): string;
            public static set CurrentDirectory(value: string);
            public static get ProcessId(): number;
            public static get ProcessPath(): string;
            public static get Is64BitProcess(): boolean;
            public static get Is64BitOperatingSystem(): boolean;
            public static get NewLine(): string;
            public static get OSVersion(): System.OperatingSystem;
            public static get Version(): System.Version;
            public static get StackTrace(): string;
            public static get UserName(): string;
            public static get UserDomainName(): string;
            public static get SystemPageSize(): number;
            public static get MachineName(): string;
            public static get SystemDirectory(): string;
            public static get UserInteractive(): boolean;
            public static get WorkingSet(): bigint;
            public static Exit ($exitCode: number) : void
            public static FailFast ($message: string) : void
            public static FailFast ($message: string, $exception: System.Exception) : void
            public static FailFast ($message: string, $exception: System.Exception, $errorMessage: string) : void
            public static GetCommandLineArgs () : System.Array$1<string>
            public static GetEnvironmentVariable ($variable: string) : string
            public static GetEnvironmentVariable ($variable: string, $target: System.EnvironmentVariableTarget) : string
            public static GetEnvironmentVariables ($target: System.EnvironmentVariableTarget) : System.Collections.IDictionary
            public static SetEnvironmentVariable ($variable: string, $value: string) : void
            public static SetEnvironmentVariable ($variable: string, $value: string, $target: System.EnvironmentVariableTarget) : void
            public static ExpandEnvironmentVariables ($name: string) : string
            public static GetFolderPath ($folder: System.Environment.SpecialFolder) : string
            public static GetFolderPath ($folder: System.Environment.SpecialFolder, $option: System.Environment.SpecialFolderOption) : string
            public static GetLogicalDrives () : System.Array$1<string>
            public static GetEnvironmentVariables () : System.Collections.IDictionary
        }
        enum EnvironmentVariableTarget
        { Process = 0, User = 1, Machine = 2 }
        class OperatingSystem extends System.Object implements System.Runtime.Serialization.ISerializable, System.ICloneable
        {
            public get Platform(): System.PlatformID;
            public get ServicePack(): string;
            public get Version(): System.Version;
            public get VersionString(): string;
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public Clone () : any
            public static IsOSPlatform ($platform: string) : boolean
            public static IsOSPlatformVersionAtLeast ($platform: string, $major: number, $minor?: number, $build?: number, $revision?: number) : boolean
            public static IsBrowser () : boolean
            public static IsLinux () : boolean
            public static IsFreeBSD () : boolean
            public static IsFreeBSDVersionAtLeast ($major: number, $minor?: number, $build?: number, $revision?: number) : boolean
            public static IsAndroid () : boolean
            public static IsAndroidVersionAtLeast ($major: number, $minor?: number, $build?: number, $revision?: number) : boolean
            public static IsIOS () : boolean
            public static IsIOSVersionAtLeast ($major: number, $minor?: number, $build?: number) : boolean
            public static IsMacOS () : boolean
            public static IsMacOSVersionAtLeast ($major: number, $minor?: number, $build?: number) : boolean
            public static IsMacCatalyst () : boolean
            public static IsMacCatalystVersionAtLeast ($major: number, $minor?: number, $build?: number) : boolean
            public static IsTvOS () : boolean
            public static IsTvOSVersionAtLeast ($major: number, $minor?: number, $build?: number) : boolean
            public static IsWatchOS () : boolean
            public static IsWatchOSVersionAtLeast ($major: number, $minor?: number, $build?: number) : boolean
            public static IsWindows () : boolean
            public static IsWindowsVersionAtLeast ($major: number, $minor?: number, $build?: number, $revision?: number) : boolean
            public constructor ($platform: System.PlatformID, $version: System.Version)
            public constructor ()
        }
        class Version extends System.Object implements System.ICloneable, System.IComparable, System.IComparable$1<System.Version>, System.IEquatable$1<System.Version>, System.ISpanFormattable, System.IFormattable
        {
            public Clone () : any
            public CompareTo ($obj: any) : number
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public ToString () : string
        }
        enum GCCollectionMode
        { Default = 0, Forced = 1, Optimized = 2 }
        enum GCNotificationStatus
        { Succeeded = 0, Failed = 1, Canceled = 2, Timeout = 3, NotApplicable = 4 }
        class GC extends System.Object
        {
            public static get MaxGeneration(): number;
            public static GetGCMemoryInfo () : System.GCMemoryInfo
            public static GetGCMemoryInfo ($kind: System.GCKind) : System.GCMemoryInfo
            public static AddMemoryPressure ($bytesAllocated: bigint) : void
            public static RemoveMemoryPressure ($bytesAllocated: bigint) : void
            public static GetGeneration ($obj: any) : number
            public static Collect ($generation: number) : void
            public static Collect () : void
            public static Collect ($generation: number, $mode: System.GCCollectionMode) : void
            public static Collect ($generation: number, $mode: System.GCCollectionMode, $blocking: boolean) : void
            public static Collect ($generation: number, $mode: System.GCCollectionMode, $blocking: boolean, $compacting: boolean) : void
            public static CollectionCount ($generation: number) : number
            public static KeepAlive ($obj: any) : void
            public static GetGeneration ($wo: System.WeakReference) : number
            public static WaitForPendingFinalizers () : void
            public static SuppressFinalize ($obj: any) : void
            public static ReRegisterForFinalize ($obj: any) : void
            public static GetTotalMemory ($forceFullCollection: boolean) : bigint
            public static GetAllocatedBytesForCurrentThread () : bigint
            public static GetTotalAllocatedBytes ($precise?: boolean) : bigint
            public static RegisterForFullGCNotification ($maxGenerationThreshold: number, $largeObjectHeapThreshold: number) : void
            public static CancelFullGCNotification () : void
            public static WaitForFullGCApproach () : System.GCNotificationStatus
            public static WaitForFullGCApproach ($millisecondsTimeout: number) : System.GCNotificationStatus
            public static WaitForFullGCComplete () : System.GCNotificationStatus
            public static WaitForFullGCComplete ($millisecondsTimeout: number) : System.GCNotificationStatus
            public static TryStartNoGCRegion ($totalSize: bigint) : boolean
            public static TryStartNoGCRegion ($totalSize: bigint, $lohSize: bigint) : boolean
            public static TryStartNoGCRegion ($totalSize: bigint, $disallowFullBlockingGC: boolean) : boolean
            public static TryStartNoGCRegion ($totalSize: bigint, $lohSize: bigint, $disallowFullBlockingGC: boolean) : boolean
            public static EndNoGCRegion () : void
        }
        class GCMemoryInfo extends System.ValueType
        {
            public get HighMemoryLoadThresholdBytes(): bigint;
            public get MemoryLoadBytes(): bigint;
            public get TotalAvailableMemoryBytes(): bigint;
            public get HeapSizeBytes(): bigint;
            public get FragmentedBytes(): bigint;
            public get Index(): bigint;
            public get Generation(): number;
            public get Compacted(): boolean;
            public get Concurrent(): boolean;
            public get TotalCommittedBytes(): bigint;
            public get PromotedBytes(): bigint;
            public get PinnedObjectsCount(): bigint;
            public get FinalizationPendingCount(): bigint;
            public get PauseDurations(): System.ReadOnlySpan$1<System.TimeSpan>;
            public get PauseTimePercentage(): number;
            public get GenerationInfo(): System.ReadOnlySpan$1<System.GCGenerationInfo>;
        }
        enum GCKind
        { Any = 0, Ephemeral = 1, FullBlocking = 2, Background = 3 }
        class WeakReference extends System.Object implements System.Runtime.Serialization.ISerializable
        {
            public get IsAlive(): boolean;
            public get TrackResurrection(): boolean;
            public get Target(): any;
            public set Target(value: any);
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public constructor ($target: any)
            public constructor ($target: any, $trackResurrection: boolean)
            public constructor ()
        }
        class Math extends System.Object
        {
            public static E : number
            public static PI : number
            public static Tau : number
            public static Min ($val1: number, $val2: number) : number
            public static Min ($val1: System.Decimal, $val2: System.Decimal) : System.Decimal
            public static Min ($val1: bigint, $val2: bigint) : bigint
            public static Min ($val1: System.IntPtr, $val2: System.IntPtr) : System.IntPtr
            public static Min ($val1: System.UIntPtr, $val2: System.UIntPtr) : System.UIntPtr
            public static MinMagnitude ($x: number, $y: number) : number
            public static ReciprocalEstimate ($d: number) : number
            public static ReciprocalSqrtEstimate ($d: number) : number
            public static Round ($d: System.Decimal) : System.Decimal
            public static Round ($d: System.Decimal, $decimals: number) : System.Decimal
            public static Round ($d: System.Decimal, $mode: System.MidpointRounding) : System.Decimal
            public static Round ($d: System.Decimal, $decimals: number, $mode: System.MidpointRounding) : System.Decimal
            public static Round ($a: number) : number
            public static Round ($value: number, $digits: number) : number
            public static Round ($value: number, $mode: System.MidpointRounding) : number
            public static Round ($value: number, $digits: number, $mode: System.MidpointRounding) : number
            public static Sign ($value: System.Decimal) : number
            public static Sign ($value: number) : number
            public static Sign ($value: bigint) : number
            public static Sign ($value: System.IntPtr) : number
            public static Truncate ($d: System.Decimal) : System.Decimal
            public static Truncate ($d: number) : number
            public static ScaleB ($x: number, $n: number) : number
            public static Abs ($value: number) : number
            public static Acos ($d: number) : number
            public static Acosh ($d: number) : number
            public static Asin ($d: number) : number
            public static Asinh ($d: number) : number
            public static Atan ($d: number) : number
            public static Atanh ($d: number) : number
            public static Atan2 ($y: number, $x: number) : number
            public static Cbrt ($d: number) : number
            public static Ceiling ($a: number) : number
            public static Cos ($d: number) : number
            public static Cosh ($value: number) : number
            public static Exp ($d: number) : number
            public static Floor ($d: number) : number
            public static FusedMultiplyAdd ($x: number, $y: number, $z: number) : number
            public static ILogB ($x: number) : number
            public static Log ($d: number) : number
            public static Log2 ($x: number) : number
            public static Log10 ($d: number) : number
            public static Pow ($x: number, $y: number) : number
            public static Sin ($a: number) : number
            public static SinCos ($x: number) : System.ValueTuple$2<number, number>
            public static Sinh ($value: number) : number
            public static Sqrt ($d: number) : number
            public static Tan ($a: number) : number
            public static Tanh ($value: number) : number
            public static Abs ($value: bigint) : bigint
            public static Abs ($value: System.IntPtr) : System.IntPtr
            public static Abs ($value: System.Decimal) : System.Decimal
            public static BigMul ($a: number, $b: number) : bigint
            public static BigMul ($a: bigint, $b: bigint, $low: $Ref<bigint>) : bigint
            public static BitDecrement ($x: number) : number
            public static BitIncrement ($x: number) : number
            public static CopySign ($x: number, $y: number) : number
            public static DivRem ($a: number, $b: number, $result: $Ref<number>) : number
            public static DivRem ($a: bigint, $b: bigint, $result: $Ref<bigint>) : bigint
            public static DivRem ($left: number, $right: number) : System.ValueTuple$2<number, number>
            public static DivRem ($left: bigint, $right: bigint) : System.ValueTuple$2<bigint, bigint>
            public static DivRem ($left: System.IntPtr, $right: System.IntPtr) : System.ValueTuple$2<System.IntPtr, System.IntPtr>
            public static DivRem ($left: System.UIntPtr, $right: System.UIntPtr) : System.ValueTuple$2<System.UIntPtr, System.UIntPtr>
            public static Ceiling ($d: System.Decimal) : System.Decimal
            public static Clamp ($value: number, $min: number, $max: number) : number
            public static Clamp ($value: System.Decimal, $min: System.Decimal, $max: System.Decimal) : System.Decimal
            public static Clamp ($value: bigint, $min: bigint, $max: bigint) : bigint
            public static Clamp ($value: System.IntPtr, $min: System.IntPtr, $max: System.IntPtr) : System.IntPtr
            public static Clamp ($value: System.UIntPtr, $min: System.UIntPtr, $max: System.UIntPtr) : System.UIntPtr
            public static Floor ($d: System.Decimal) : System.Decimal
            public static IEEERemainder ($x: number, $y: number) : number
            public static Log ($a: number, $newBase: number) : number
            public static Max ($val1: number, $val2: number) : number
            public static Max ($val1: System.Decimal, $val2: System.Decimal) : System.Decimal
            public static Max ($val1: bigint, $val2: bigint) : bigint
            public static Max ($val1: System.IntPtr, $val2: System.IntPtr) : System.IntPtr
            public static Max ($val1: System.UIntPtr, $val2: System.UIntPtr) : System.UIntPtr
            public static MaxMagnitude ($x: number, $y: number) : number
        }
        class IntPtr extends System.ValueType implements System.IEquatable$1<System.IntPtr>, System.IComparable, System.IComparable$1<System.IntPtr>, System.ISpanFormattable, System.IFormattable, System.Runtime.Serialization.ISerializable, System.IBinaryInteger$1<System.IntPtr>, System.IBinaryNumber$1<System.IntPtr>, System.IBitwiseOperators$3<System.IntPtr, System.IntPtr, System.IntPtr>, System.INumber$1<System.IntPtr>, System.IAdditionOperators$3<System.IntPtr, System.IntPtr, System.IntPtr>, System.IAdditiveIdentity$2<System.IntPtr, System.IntPtr>, System.IComparisonOperators$2<System.IntPtr, System.IntPtr>, System.IEqualityOperators$2<System.IntPtr, System.IntPtr>, System.IDecrementOperators$1<System.IntPtr>, System.IDivisionOperators$3<System.IntPtr, System.IntPtr, System.IntPtr>, System.IIncrementOperators$1<System.IntPtr>, System.IModulusOperators$3<System.IntPtr, System.IntPtr, System.IntPtr>, System.IMultiplicativeIdentity$2<System.IntPtr, System.IntPtr>, System.IMultiplyOperators$3<System.IntPtr, System.IntPtr, System.IntPtr>, System.ISpanParseable$1<System.IntPtr>, System.IParseable$1<System.IntPtr>, System.ISubtractionOperators$3<System.IntPtr, System.IntPtr, System.IntPtr>, System.IUnaryNegationOperators$2<System.IntPtr, System.IntPtr>, System.IUnaryPlusOperators$2<System.IntPtr, System.IntPtr>, System.IShiftOperators$2<System.IntPtr, System.IntPtr>, System.IMinMaxValue$1<System.IntPtr>, System.ISignedNumber$1<System.IntPtr>
        {
            public static Zero : System.IntPtr
            public static get Size(): number;
            public static get MaxValue(): System.IntPtr;
            public static get MinValue(): System.IntPtr;
            public Equals ($obj: any) : boolean
            public ToInt32 () : number
            public ToInt64 () : bigint
            public static op_Explicit ($value: number) : System.IntPtr
            public static op_Explicit ($value: bigint) : System.IntPtr
            public static op_Explicit ($value: System.IntPtr) : number
            public static op_Explicit ($value: System.IntPtr) : bigint
            public static op_Equality ($value1: System.IntPtr, $value2: System.IntPtr) : boolean
            public static op_Inequality ($value1: System.IntPtr, $value2: System.IntPtr) : boolean
            public static Add ($pointer: System.IntPtr, $offset: number) : System.IntPtr
            public static op_Addition ($pointer: System.IntPtr, $offset: number) : System.IntPtr
            public static Subtract ($pointer: System.IntPtr, $offset: number) : System.IntPtr
            public static op_Subtraction ($pointer: System.IntPtr, $offset: number) : System.IntPtr
            public CompareTo ($value: any) : number
            public CompareTo ($value: System.IntPtr) : number
            public Equals ($other: System.IntPtr) : boolean
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider) : boolean
            public static Parse ($s: string) : System.IntPtr
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : System.IntPtr
            public static Parse ($s: string, $provider: System.IFormatProvider) : System.IntPtr
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : System.IntPtr
            public static Parse ($s: System.ReadOnlySpan$1<number>, $style?: System.Globalization.NumberStyles, $provider?: System.IFormatProvider) : System.IntPtr
            public static TryParse ($s: string, $result: $Ref<System.IntPtr>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<System.IntPtr>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<System.IntPtr>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<System.IntPtr>) : boolean
            public constructor ($value: number)
            public constructor ($value: bigint)
            public CompareTo ($obj: any) : number
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class UIntPtr extends System.ValueType implements System.IEquatable$1<System.UIntPtr>, System.IComparable, System.IComparable$1<System.UIntPtr>, System.ISpanFormattable, System.IFormattable, System.Runtime.Serialization.ISerializable, System.IBinaryInteger$1<System.UIntPtr>, System.IBinaryNumber$1<System.UIntPtr>, System.IBitwiseOperators$3<System.UIntPtr, System.UIntPtr, System.UIntPtr>, System.INumber$1<System.UIntPtr>, System.IAdditionOperators$3<System.UIntPtr, System.UIntPtr, System.UIntPtr>, System.IAdditiveIdentity$2<System.UIntPtr, System.UIntPtr>, System.IComparisonOperators$2<System.UIntPtr, System.UIntPtr>, System.IEqualityOperators$2<System.UIntPtr, System.UIntPtr>, System.IDecrementOperators$1<System.UIntPtr>, System.IDivisionOperators$3<System.UIntPtr, System.UIntPtr, System.UIntPtr>, System.IIncrementOperators$1<System.UIntPtr>, System.IModulusOperators$3<System.UIntPtr, System.UIntPtr, System.UIntPtr>, System.IMultiplicativeIdentity$2<System.UIntPtr, System.UIntPtr>, System.IMultiplyOperators$3<System.UIntPtr, System.UIntPtr, System.UIntPtr>, System.ISpanParseable$1<System.UIntPtr>, System.IParseable$1<System.UIntPtr>, System.ISubtractionOperators$3<System.UIntPtr, System.UIntPtr, System.UIntPtr>, System.IUnaryNegationOperators$2<System.UIntPtr, System.UIntPtr>, System.IUnaryPlusOperators$2<System.UIntPtr, System.UIntPtr>, System.IShiftOperators$2<System.UIntPtr, System.UIntPtr>, System.IMinMaxValue$1<System.UIntPtr>, System.IUnsignedNumber$1<System.UIntPtr>
        {
            public static Zero : System.UIntPtr
            public static get Size(): number;
            public static get MaxValue(): System.UIntPtr;
            public static get MinValue(): System.UIntPtr;
            public Equals ($obj: any) : boolean
            public ToUInt32 () : number
            public ToUInt64 () : bigint
            public static op_Explicit ($value: number) : System.UIntPtr
            public static op_Explicit ($value: bigint) : System.UIntPtr
            public static op_Explicit ($value: System.UIntPtr) : number
            public static op_Explicit ($value: System.UIntPtr) : bigint
            public static op_Equality ($value1: System.UIntPtr, $value2: System.UIntPtr) : boolean
            public static op_Inequality ($value1: System.UIntPtr, $value2: System.UIntPtr) : boolean
            public static Add ($pointer: System.UIntPtr, $offset: number) : System.UIntPtr
            public static op_Addition ($pointer: System.UIntPtr, $offset: number) : System.UIntPtr
            public static Subtract ($pointer: System.UIntPtr, $offset: number) : System.UIntPtr
            public static op_Subtraction ($pointer: System.UIntPtr, $offset: number) : System.UIntPtr
            public CompareTo ($value: any) : number
            public CompareTo ($value: System.UIntPtr) : number
            public Equals ($other: System.UIntPtr) : boolean
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider) : boolean
            public static Parse ($s: string) : System.UIntPtr
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : System.UIntPtr
            public static Parse ($s: string, $provider: System.IFormatProvider) : System.UIntPtr
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : System.UIntPtr
            public static Parse ($s: System.ReadOnlySpan$1<number>, $style?: System.Globalization.NumberStyles, $provider?: System.IFormatProvider) : System.UIntPtr
            public static TryParse ($s: string, $result: $Ref<System.UIntPtr>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<System.UIntPtr>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<System.UIntPtr>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<System.UIntPtr>) : boolean
            public constructor ($value: number)
            public constructor ($value: bigint)
            public CompareTo ($obj: any) : number
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class ValueTuple$2<T1, T2> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$2<T1, T2>>, System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.IComparable$1<System.ValueTuple$2<T1, T2>>, System.IValueTupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        interface IValueTupleInternal extends System.Runtime.CompilerServices.ITuple
        {
        }
        class MathF extends System.Object
        {
            public static E : number
            public static PI : number
            public static Tau : number
            public static Acos ($x: number) : number
            public static Acosh ($x: number) : number
            public static Asin ($x: number) : number
            public static Asinh ($x: number) : number
            public static Atan ($x: number) : number
            public static Atanh ($x: number) : number
            public static Atan2 ($y: number, $x: number) : number
            public static Cbrt ($x: number) : number
            public static Ceiling ($x: number) : number
            public static Cos ($x: number) : number
            public static Cosh ($x: number) : number
            public static Exp ($x: number) : number
            public static Floor ($x: number) : number
            public static FusedMultiplyAdd ($x: number, $y: number, $z: number) : number
            public static ILogB ($x: number) : number
            public static Log ($x: number) : number
            public static Log2 ($x: number) : number
            public static Log10 ($x: number) : number
            public static Pow ($x: number, $y: number) : number
            public static Sin ($x: number) : number
            public static SinCos ($x: number) : System.ValueTuple$2<number, number>
            public static Sinh ($x: number) : number
            public static Sqrt ($x: number) : number
            public static Tan ($x: number) : number
            public static Tanh ($x: number) : number
            public static Abs ($x: number) : number
            public static BitDecrement ($x: number) : number
            public static BitIncrement ($x: number) : number
            public static CopySign ($x: number, $y: number) : number
            public static IEEERemainder ($x: number, $y: number) : number
            public static Log ($x: number, $y: number) : number
            public static Max ($x: number, $y: number) : number
            public static MaxMagnitude ($x: number, $y: number) : number
            public static Min ($x: number, $y: number) : number
            public static MinMagnitude ($x: number, $y: number) : number
            public static ReciprocalEstimate ($x: number) : number
            public static ReciprocalSqrtEstimate ($x: number) : number
            public static Round ($x: number) : number
            public static Round ($x: number, $digits: number) : number
            public static Round ($x: number, $mode: System.MidpointRounding) : number
            public static Round ($x: number, $digits: number, $mode: System.MidpointRounding) : number
            public static Sign ($x: number) : number
            public static Truncate ($x: number) : number
            public static ScaleB ($x: number, $n: number) : number
        }
        class MissingMemberException extends System.MemberAccessException implements System.Runtime.Serialization.ISerializable
        {
            public get Message(): string;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($className: string, $memberName: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class MemberAccessException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class RuntimeArgumentHandle extends System.ValueType
        {
        }
        class RuntimeTypeHandle extends System.ValueType implements System.Runtime.Serialization.ISerializable
        {
            public get Value(): System.IntPtr;
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public static op_Equality ($left: System.RuntimeTypeHandle, $right: any) : boolean
            public static op_Equality ($left: any, $right: System.RuntimeTypeHandle) : boolean
            public static op_Inequality ($left: System.RuntimeTypeHandle, $right: any) : boolean
            public static op_Inequality ($left: any, $right: System.RuntimeTypeHandle) : boolean
            public Equals ($obj: any) : boolean
            public Equals ($handle: System.RuntimeTypeHandle) : boolean
            public GetModuleHandle () : System.ModuleHandle
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class ModuleHandle extends System.ValueType
        {
            public static EmptyHandle : System.ModuleHandle
            public get MDStreamVersion(): number;
            public Equals ($obj: any) : boolean
            public Equals ($handle: System.ModuleHandle) : boolean
            public static op_Equality ($left: System.ModuleHandle, $right: System.ModuleHandle) : boolean
            public static op_Inequality ($left: System.ModuleHandle, $right: System.ModuleHandle) : boolean
            public GetRuntimeTypeHandleFromMetadataToken ($typeToken: number) : System.RuntimeTypeHandle
            public ResolveTypeHandle ($typeToken: number) : System.RuntimeTypeHandle
            public ResolveTypeHandle ($typeToken: number, $typeInstantiationContext: System.Array$1<System.RuntimeTypeHandle>, $methodInstantiationContext: System.Array$1<System.RuntimeTypeHandle>) : System.RuntimeTypeHandle
            public GetRuntimeMethodHandleFromMetadataToken ($methodToken: number) : System.RuntimeMethodHandle
            public ResolveMethodHandle ($methodToken: number) : System.RuntimeMethodHandle
            public ResolveMethodHandle ($methodToken: number, $typeInstantiationContext: System.Array$1<System.RuntimeTypeHandle>, $methodInstantiationContext: System.Array$1<System.RuntimeTypeHandle>) : System.RuntimeMethodHandle
            public GetRuntimeFieldHandleFromMetadataToken ($fieldToken: number) : System.RuntimeFieldHandle
            public ResolveFieldHandle ($fieldToken: number) : System.RuntimeFieldHandle
            public ResolveFieldHandle ($fieldToken: number, $typeInstantiationContext: System.Array$1<System.RuntimeTypeHandle>, $methodInstantiationContext: System.Array$1<System.RuntimeTypeHandle>) : System.RuntimeFieldHandle
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class RuntimeMethodHandle extends System.ValueType implements System.Runtime.Serialization.ISerializable
        {
            public get Value(): System.IntPtr;
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public Equals ($obj: any) : boolean
            public static op_Equality ($left: System.RuntimeMethodHandle, $right: System.RuntimeMethodHandle) : boolean
            public static op_Inequality ($left: System.RuntimeMethodHandle, $right: System.RuntimeMethodHandle) : boolean
            public Equals ($handle: System.RuntimeMethodHandle) : boolean
            public GetFunctionPointer () : System.IntPtr
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class RuntimeFieldHandle extends System.ValueType implements System.Runtime.Serialization.ISerializable
        {
            public get Value(): System.IntPtr;
            public Equals ($obj: any) : boolean
            public Equals ($handle: System.RuntimeFieldHandle) : boolean
            public static op_Equality ($left: System.RuntimeFieldHandle, $right: System.RuntimeFieldHandle) : boolean
            public static op_Inequality ($left: System.RuntimeFieldHandle, $right: System.RuntimeFieldHandle) : boolean
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public static Equals ($objA: any, $objB: any) : boolean
        }
        enum StringComparison
        { CurrentCulture = 0, CurrentCultureIgnoreCase = 1, InvariantCulture = 2, InvariantCultureIgnoreCase = 3, Ordinal = 4, OrdinalIgnoreCase = 5 }
        enum StringSplitOptions
        { None = 0, RemoveEmptyEntries = 1, TrimEntries = 2 }
        class CharEnumerator extends System.Object implements System.Collections.IEnumerator, System.Collections.Generic.IEnumerator$1<number>, System.IDisposable, System.ICloneable
        {
            public get Current(): number;
            public Clone () : any
            public MoveNext () : boolean
            public Dispose () : void
            public Reset () : void
        }
        interface IDisposable
        {
            Dispose () : void
        }
        class Guid extends System.ValueType implements System.ISpanFormattable, System.IFormattable, System.IComparable, System.IComparable$1<System.Guid>, System.IEquatable$1<System.Guid>, System.IComparisonOperators$2<System.Guid, System.Guid>, System.IEqualityOperators$2<System.Guid, System.Guid>, System.ISpanParseable$1<System.Guid>, System.IParseable$1<System.Guid>
        {
            public static Empty : System.Guid
            public static Parse ($input: string) : System.Guid
            public static Parse ($input: System.ReadOnlySpan$1<number>) : System.Guid
            public static TryParse ($input: string, $result: $Ref<System.Guid>) : boolean
            public static TryParse ($input: System.ReadOnlySpan$1<number>, $result: $Ref<System.Guid>) : boolean
            public static ParseExact ($input: string, $format: string) : System.Guid
            public static ParseExact ($input: System.ReadOnlySpan$1<number>, $format: System.ReadOnlySpan$1<number>) : System.Guid
            public static TryParseExact ($input: string, $format: string, $result: $Ref<System.Guid>) : boolean
            public static TryParseExact ($input: System.ReadOnlySpan$1<number>, $format: System.ReadOnlySpan$1<number>, $result: $Ref<System.Guid>) : boolean
            public ToByteArray () : System.Array$1<number>
            public TryWriteBytes ($destination: System.Span$1<number>) : boolean
            public ToString () : string
            public Equals ($o: any) : boolean
            public Equals ($g: System.Guid) : boolean
            public CompareTo ($value: any) : number
            public CompareTo ($value: System.Guid) : number
            public static op_Equality ($a: System.Guid, $b: System.Guid) : boolean
            public static op_Inequality ($a: System.Guid, $b: System.Guid) : boolean
            public ToString ($format: string) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>) : boolean
            public static NewGuid () : System.Guid
            public constructor ($b: System.Array$1<number>)
            public constructor ($b: System.ReadOnlySpan$1<number>)
            public constructor ($a: number, $b: number, $c: number, $d: number, $e: number, $f: number, $g: number, $h: number, $i: number, $j: number, $k: number)
            public constructor ($a: number, $b: number, $c: number, $d: System.Array$1<number>)
            public constructor ($g: string)
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public CompareTo ($obj: any) : number
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        interface Func$2<T, TResult>
        { (arg: T) : TResult; }
        interface Func$4<T1, T2, T3, TResult>
        { (arg1: T1, arg2: T2, arg3: T3) : TResult; }
        class TypeLoadException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public get Message(): string;
            public get TypeName(): string;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class AccessViolationException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        interface Action
        { () : void; }
        var Action: { new (func: () => void): Action; }
        interface IAsyncResult
        {
            IsCompleted : boolean
            AsyncWaitHandle : System.Threading.WaitHandle
            AsyncState : any
            CompletedSynchronously : boolean
        }
        interface AsyncCallback
        { (ar: System.IAsyncResult) : void; }
        var AsyncCallback: { new (func: (ar: System.IAsyncResult) => void): AsyncCallback; }
        class Activator extends System.Object
        {
            public static CreateInstance ($type: System.Type, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo) : any
            public static CreateInstance ($type: System.Type, ...args: any[]) : any
            public static CreateInstance ($type: System.Type, $args: System.Array$1<any>, $activationAttributes: System.Array$1<any>) : any
            public static CreateInstance ($type: System.Type) : any
            public static CreateInstanceFrom ($assemblyFile: string, $typeName: string) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstanceFrom ($assemblyFile: string, $typeName: string, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstanceFrom ($assemblyFile: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstance ($type: System.Type, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : any
            public static CreateInstance ($assemblyName: string, $typeName: string) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstance ($assemblyName: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstance ($assemblyName: string, $typeName: string, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public static CreateInstance ($type: System.Type, $nonPublic: boolean) : any
        }
        class MarshalByRefObject extends System.Object
        {
        }
        class AggregateException extends System.Exception implements System.Runtime.Serialization.ISerializable
        {
            public get InnerExceptions(): System.Collections.ObjectModel.ReadOnlyCollection$1<System.Exception>;
            public get Message(): string;
            public Handle ($predicate: System.Func$2<System.Exception, boolean>) : void
            public Flatten () : System.AggregateException
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($innerExceptions: System.Collections.Generic.IEnumerable$1<System.Exception>)
            public constructor (...innerExceptions: System.Exception[])
            public constructor ($message: string, $innerExceptions: System.Collections.Generic.IEnumerable$1<System.Exception>)
            public constructor ($message: string, ...innerExceptions: System.Exception[])
        }
        class AppContext extends System.Object
        {
            public static get BaseDirectory(): string;
            public static get TargetFrameworkName(): string;
            public static GetData ($name: string) : any
            public static SetData ($name: string, $data: any) : void
            public static add_UnhandledException ($value: System.UnhandledExceptionEventHandler) : void
            public static remove_UnhandledException ($value: System.UnhandledExceptionEventHandler) : void
            public static add_FirstChanceException ($value: System.EventHandler$1<System.Runtime.ExceptionServices.FirstChanceExceptionEventArgs>) : void
            public static remove_FirstChanceException ($value: System.EventHandler$1<System.Runtime.ExceptionServices.FirstChanceExceptionEventArgs>) : void
            public static add_ProcessExit ($value: System.EventHandler) : void
            public static remove_ProcessExit ($value: System.EventHandler) : void
            public static TryGetSwitch ($switchName: string, $isEnabled: $Ref<boolean>) : boolean
            public static SetSwitch ($switchName: string, $isEnabled: boolean) : void
        }
        interface UnhandledExceptionEventHandler
        { (sender: any, e: System.UnhandledExceptionEventArgs) : void; }
        var UnhandledExceptionEventHandler: { new (func: (sender: any, e: System.UnhandledExceptionEventArgs) => void): UnhandledExceptionEventHandler; }
        class UnhandledExceptionEventArgs extends System.EventArgs
        {
            public get ExceptionObject(): any;
            public get IsTerminating(): boolean;
            public constructor ($exception: any, $isTerminating: boolean)
            public constructor ()
        }
        class EventArgs extends System.Object
        {
            public static Empty : System.EventArgs
            public constructor ()
        }
        interface EventHandler$1<TEventArgs>
        { (sender: any, e: TEventArgs) : void; }
        interface EventHandler
        { (sender: any, e: System.EventArgs) : void; }
        var EventHandler: { new (func: (sender: any, e: System.EventArgs) => void): EventHandler; }
        class AppDomain extends System.MarshalByRefObject
        {
            public static get CurrentDomain(): System.AppDomain;
            public get BaseDirectory(): string;
            public get RelativeSearchPath(): string;
            public get SetupInformation(): System.AppDomainSetup;
            public get DynamicDirectory(): string;
            public get FriendlyName(): string;
            public get Id(): number;
            public get IsFullyTrusted(): boolean;
            public get IsHomogenous(): boolean;
            public static get MonitoringIsEnabled(): boolean;
            public static set MonitoringIsEnabled(value: boolean);
            public get MonitoringSurvivedMemorySize(): bigint;
            public static get MonitoringSurvivedProcessMemorySize(): bigint;
            public get MonitoringTotalAllocatedMemorySize(): bigint;
            public get ShadowCopyFiles(): boolean;
            public get MonitoringTotalProcessorTime(): System.TimeSpan;
            public add_UnhandledException ($value: System.UnhandledExceptionEventHandler) : void
            public remove_UnhandledException ($value: System.UnhandledExceptionEventHandler) : void
            public add_DomainUnload ($value: System.EventHandler) : void
            public remove_DomainUnload ($value: System.EventHandler) : void
            public add_FirstChanceException ($value: System.EventHandler$1<System.Runtime.ExceptionServices.FirstChanceExceptionEventArgs>) : void
            public remove_FirstChanceException ($value: System.EventHandler$1<System.Runtime.ExceptionServices.FirstChanceExceptionEventArgs>) : void
            public add_ProcessExit ($value: System.EventHandler) : void
            public remove_ProcessExit ($value: System.EventHandler) : void
            public ApplyPolicy ($assemblyName: string) : string
            public ExecuteAssembly ($assemblyFile: string) : number
            public ExecuteAssembly ($assemblyFile: string, $args: System.Array$1<string>) : number
            public ExecuteAssemblyByName ($assemblyName: System.Reflection.AssemblyName, ...args: string[]) : number
            public ExecuteAssemblyByName ($assemblyName: string) : number
            public ExecuteAssemblyByName ($assemblyName: string, ...args: string[]) : number
            public GetData ($name: string) : any
            public SetData ($name: string, $data: any) : void
            public IsCompatibilitySwitchSet ($value: string) : System.Nullable$1<boolean>
            public IsDefaultAppDomain () : boolean
            public IsFinalizingForUnload () : boolean
            public Load ($rawAssembly: System.Array$1<number>) : System.Reflection.Assembly
            public Load ($rawAssembly: System.Array$1<number>, $rawSymbolStore: System.Array$1<number>) : System.Reflection.Assembly
            public Load ($assemblyRef: System.Reflection.AssemblyName) : System.Reflection.Assembly
            public Load ($assemblyString: string) : System.Reflection.Assembly
            public ReflectionOnlyGetAssemblies () : System.Array$1<System.Reflection.Assembly>
            public GetAssemblies () : System.Array$1<System.Reflection.Assembly>
            public add_AssemblyLoad ($value: System.AssemblyLoadEventHandler) : void
            public remove_AssemblyLoad ($value: System.AssemblyLoadEventHandler) : void
            public add_AssemblyResolve ($value: System.ResolveEventHandler) : void
            public remove_AssemblyResolve ($value: System.ResolveEventHandler) : void
            public add_ReflectionOnlyAssemblyResolve ($value: System.ResolveEventHandler) : void
            public remove_ReflectionOnlyAssemblyResolve ($value: System.ResolveEventHandler) : void
            public add_TypeResolve ($value: System.ResolveEventHandler) : void
            public remove_TypeResolve ($value: System.ResolveEventHandler) : void
            public add_ResourceResolve ($value: System.ResolveEventHandler) : void
            public remove_ResourceResolve ($value: System.ResolveEventHandler) : void
            public SetPrincipalPolicy ($policy: System.Security.Principal.PrincipalPolicy) : void
            public SetThreadPrincipal ($principal: System.Security.Principal.IPrincipal) : void
            public CreateInstance ($assemblyName: string, $typeName: string) : System.Runtime.Remoting.ObjectHandle
            public CreateInstance ($assemblyName: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public CreateInstance ($assemblyName: string, $typeName: string, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public CreateInstanceAndUnwrap ($assemblyName: string, $typeName: string) : any
            public CreateInstanceAndUnwrap ($assemblyName: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : any
            public CreateInstanceAndUnwrap ($assemblyName: string, $typeName: string, $activationAttributes: System.Array$1<any>) : any
            public CreateInstanceFrom ($assemblyFile: string, $typeName: string) : System.Runtime.Remoting.ObjectHandle
            public CreateInstanceFrom ($assemblyFile: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public CreateInstanceFrom ($assemblyFile: string, $typeName: string, $activationAttributes: System.Array$1<any>) : System.Runtime.Remoting.ObjectHandle
            public CreateInstanceFromAndUnwrap ($assemblyFile: string, $typeName: string) : any
            public CreateInstanceFromAndUnwrap ($assemblyFile: string, $typeName: string, $ignoreCase: boolean, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo, $activationAttributes: System.Array$1<any>) : any
            public CreateInstanceFromAndUnwrap ($assemblyFile: string, $typeName: string, $activationAttributes: System.Array$1<any>) : any
        }
        class AppDomainSetup extends System.Object
        {
            public get ApplicationBase(): string;
            public get TargetFrameworkName(): string;
        }
        class Nullable$1<T> extends System.ValueType
        {
        }
        interface AssemblyLoadEventHandler
        { (sender: any, args: System.AssemblyLoadEventArgs) : void; }
        var AssemblyLoadEventHandler: { new (func: (sender: any, args: System.AssemblyLoadEventArgs) => void): AssemblyLoadEventHandler; }
        class AssemblyLoadEventArgs extends System.EventArgs
        {
            public get LoadedAssembly(): System.Reflection.Assembly;
            public constructor ($loadedAssembly: System.Reflection.Assembly)
            public constructor ()
        }
        interface ResolveEventHandler
        { (sender: any, args: System.ResolveEventArgs) : System.Reflection.Assembly; }
        var ResolveEventHandler: { new (func: (sender: any, args: System.ResolveEventArgs) => System.Reflection.Assembly): ResolveEventHandler; }
        class ResolveEventArgs extends System.EventArgs
        {
            public get Name(): string;
            public get RequestingAssembly(): System.Reflection.Assembly;
            public constructor ($name: string)
            public constructor ($name: string, $requestingAssembly: System.Reflection.Assembly)
            public constructor ()
        }
        class TimeSpan extends System.ValueType implements System.IComparable, System.IComparable$1<System.TimeSpan>, System.IEquatable$1<System.TimeSpan>, System.ISpanFormattable, System.IFormattable, System.IAdditionOperators$3<System.TimeSpan, System.TimeSpan, System.TimeSpan>, System.IAdditiveIdentity$2<System.TimeSpan, System.TimeSpan>, System.IComparisonOperators$2<System.TimeSpan, System.TimeSpan>, System.IEqualityOperators$2<System.TimeSpan, System.TimeSpan>, System.IDivisionOperators$3<System.TimeSpan, number, System.TimeSpan>, System.IDivisionOperators$3<System.TimeSpan, System.TimeSpan, number>, System.IMinMaxValue$1<System.TimeSpan>, System.IMultiplyOperators$3<System.TimeSpan, number, System.TimeSpan>, System.IMultiplicativeIdentity$2<System.TimeSpan, number>, System.ISpanParseable$1<System.TimeSpan>, System.IParseable$1<System.TimeSpan>, System.ISubtractionOperators$3<System.TimeSpan, System.TimeSpan, System.TimeSpan>, System.IUnaryNegationOperators$2<System.TimeSpan, System.TimeSpan>, System.IUnaryPlusOperators$2<System.TimeSpan, System.TimeSpan>
        {
            public static Zero : System.TimeSpan
            public static MaxValue : System.TimeSpan
            public static MinValue : System.TimeSpan
            public static TicksPerMillisecond : bigint
            public static TicksPerSecond : bigint
            public static TicksPerMinute : bigint
            public static TicksPerHour : bigint
            public static TicksPerDay : bigint
            public get Ticks(): bigint;
            public get Days(): number;
            public get Hours(): number;
            public get Milliseconds(): number;
            public get Minutes(): number;
            public get Seconds(): number;
            public get TotalDays(): number;
            public get TotalHours(): number;
            public get TotalMilliseconds(): number;
            public get TotalMinutes(): number;
            public get TotalSeconds(): number;
            public Add ($ts: System.TimeSpan) : System.TimeSpan
            public static Compare ($t1: System.TimeSpan, $t2: System.TimeSpan) : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: System.TimeSpan) : number
            public static FromDays ($value: number) : System.TimeSpan
            public Duration () : System.TimeSpan
            public Equals ($value: any) : boolean
            public Equals ($obj: System.TimeSpan) : boolean
            public static Equals ($t1: System.TimeSpan, $t2: System.TimeSpan) : boolean
            public static FromHours ($value: number) : System.TimeSpan
            public static FromMilliseconds ($value: number) : System.TimeSpan
            public static FromMinutes ($value: number) : System.TimeSpan
            public Negate () : System.TimeSpan
            public static FromSeconds ($value: number) : System.TimeSpan
            public Subtract ($ts: System.TimeSpan) : System.TimeSpan
            public Multiply ($factor: number) : System.TimeSpan
            public Divide ($divisor: number) : System.TimeSpan
            public Divide ($ts: System.TimeSpan) : number
            public static FromTicks ($value: bigint) : System.TimeSpan
            public static Parse ($s: string) : System.TimeSpan
            public static Parse ($input: string, $formatProvider: System.IFormatProvider) : System.TimeSpan
            public static Parse ($input: System.ReadOnlySpan$1<number>, $formatProvider?: System.IFormatProvider) : System.TimeSpan
            public static ParseExact ($input: string, $format: string, $formatProvider: System.IFormatProvider) : System.TimeSpan
            public static ParseExact ($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider) : System.TimeSpan
            public static ParseExact ($input: string, $format: string, $formatProvider: System.IFormatProvider, $styles: System.Globalization.TimeSpanStyles) : System.TimeSpan
            public static ParseExact ($input: System.ReadOnlySpan$1<number>, $format: System.ReadOnlySpan$1<number>, $formatProvider: System.IFormatProvider, $styles?: System.Globalization.TimeSpanStyles) : System.TimeSpan
            public static ParseExact ($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $styles: System.Globalization.TimeSpanStyles) : System.TimeSpan
            public static ParseExact ($input: System.ReadOnlySpan$1<number>, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $styles?: System.Globalization.TimeSpanStyles) : System.TimeSpan
            public static TryParse ($s: string, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParse ($input: string, $formatProvider: System.IFormatProvider, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParse ($input: System.ReadOnlySpan$1<number>, $formatProvider: System.IFormatProvider, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParseExact ($input: string, $format: string, $formatProvider: System.IFormatProvider, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParseExact ($input: System.ReadOnlySpan$1<number>, $format: System.ReadOnlySpan$1<number>, $formatProvider: System.IFormatProvider, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParseExact ($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParseExact ($input: System.ReadOnlySpan$1<number>, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParseExact ($input: string, $format: string, $formatProvider: System.IFormatProvider, $styles: System.Globalization.TimeSpanStyles, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParseExact ($input: System.ReadOnlySpan$1<number>, $format: System.ReadOnlySpan$1<number>, $formatProvider: System.IFormatProvider, $styles: System.Globalization.TimeSpanStyles, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParseExact ($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $styles: System.Globalization.TimeSpanStyles, $result: $Ref<System.TimeSpan>) : boolean
            public static TryParseExact ($input: System.ReadOnlySpan$1<number>, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $styles: System.Globalization.TimeSpanStyles, $result: $Ref<System.TimeSpan>) : boolean
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $formatProvider?: System.IFormatProvider) : boolean
            public static op_UnaryNegation ($t: System.TimeSpan) : System.TimeSpan
            public static op_Subtraction ($t1: System.TimeSpan, $t2: System.TimeSpan) : System.TimeSpan
            public static op_UnaryPlus ($t: System.TimeSpan) : System.TimeSpan
            public static op_Addition ($t1: System.TimeSpan, $t2: System.TimeSpan) : System.TimeSpan
            public static op_Multiply ($timeSpan: System.TimeSpan, $factor: number) : System.TimeSpan
            public static op_Multiply ($factor: number, $timeSpan: System.TimeSpan) : System.TimeSpan
            public static op_Division ($timeSpan: System.TimeSpan, $divisor: number) : System.TimeSpan
            public static op_Division ($t1: System.TimeSpan, $t2: System.TimeSpan) : number
            public static op_Equality ($t1: System.TimeSpan, $t2: System.TimeSpan) : boolean
            public static op_Inequality ($t1: System.TimeSpan, $t2: System.TimeSpan) : boolean
            public static op_LessThan ($t1: System.TimeSpan, $t2: System.TimeSpan) : boolean
            public static op_LessThanOrEqual ($t1: System.TimeSpan, $t2: System.TimeSpan) : boolean
            public static op_GreaterThan ($t1: System.TimeSpan, $t2: System.TimeSpan) : boolean
            public static op_GreaterThanOrEqual ($t1: System.TimeSpan, $t2: System.TimeSpan) : boolean
            public constructor ($ticks: bigint)
            public constructor ($hours: number, $minutes: number, $seconds: number)
            public constructor ($days: number, $hours: number, $minutes: number, $seconds: number)
            public constructor ($days: number, $hours: number, $minutes: number, $seconds: number, $milliseconds: number)
            public CompareTo ($obj: any) : number
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class AppDomainUnloadedException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class ApplicationException extends System.Exception implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class ApplicationId extends System.Object
        {
            public get Culture(): string;
            public get Name(): string;
            public get ProcessorArchitecture(): string;
            public get Version(): System.Version;
            public get PublicKeyToken(): System.Array$1<number>;
            public Copy () : System.ApplicationId
            public constructor ($publicKeyToken: System.Array$1<number>, $name: string, $version: System.Version, $processorArchitecture: string, $culture: string)
            public constructor ()
        }
        class ArgumentException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public get Message(): string;
            public get ParamName(): string;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($message: string, $paramName: string, $innerException: System.Exception)
            public constructor ($message: string, $paramName: string)
        }
        class ArgumentNullException extends System.ArgumentException implements System.Runtime.Serialization.ISerializable
        {
            public static ThrowIfNull ($argument: any, $paramName?: string) : void
            public constructor ()
            public constructor ($paramName: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($paramName: string, $message: string)
            public constructor ($message: string)
            public constructor ($message: string, $paramName: string, $innerException: System.Exception)
            public constructor ($message: string, $paramName: string)
        }
        class ArgumentOutOfRangeException extends System.ArgumentException implements System.Runtime.Serialization.ISerializable
        {
            public get Message(): string;
            public get ActualValue(): any;
            public constructor ()
            public constructor ($paramName: string)
            public constructor ($paramName: string, $message: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($paramName: string, $actualValue: any, $message: string)
            public constructor ($message: string)
            public constructor ($message: string, $paramName: string, $innerException: System.Exception)
            public constructor ($message: string, $paramName: string)
        }
        class ArithmeticException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class ArrayTypeMismatchException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        enum AttributeTargets
        { Assembly = 1, Module = 2, Class = 4, Struct = 8, Enum = 16, Constructor = 32, Method = 64, Property = 128, Field = 256, Event = 512, Interface = 1024, Parameter = 2048, Delegate = 4096, ReturnValue = 8192, GenericParameter = 16384, All = 32767 }
        class AttributeUsageAttribute extends System.Attribute
        {
            public get ValidOn(): System.AttributeTargets;
            public get AllowMultiple(): boolean;
            public set AllowMultiple(value: boolean);
            public get Inherited(): boolean;
            public set Inherited(value: boolean);
            public constructor ($validOn: System.AttributeTargets)
            public constructor ()
        }
        class BitConverter extends System.Object
        {
            public static IsLittleEndian : boolean
            public static GetBytes ($value: boolean) : System.Array$1<number>
            public static TryWriteBytes ($destination: System.Span$1<number>, $value: boolean) : boolean
            public static GetBytes ($value: number) : System.Array$1<number>
            public static TryWriteBytes ($destination: System.Span$1<number>, $value: number) : boolean
            public static GetBytes ($value: bigint) : System.Array$1<number>
            public static TryWriteBytes ($destination: System.Span$1<number>, $value: bigint) : boolean
            public static GetBytes ($value: System.Half) : System.Array$1<number>
            public static TryWriteBytes ($destination: System.Span$1<number>, $value: System.Half) : boolean
            public static ToChar ($value: System.Array$1<number>, $startIndex: number) : number
            public static ToChar ($value: System.ReadOnlySpan$1<number>) : number
            public static ToInt16 ($value: System.Array$1<number>, $startIndex: number) : number
            public static ToInt16 ($value: System.ReadOnlySpan$1<number>) : number
            public static ToInt32 ($value: System.Array$1<number>, $startIndex: number) : number
            public static ToInt32 ($value: System.ReadOnlySpan$1<number>) : number
            public static ToInt64 ($value: System.Array$1<number>, $startIndex: number) : bigint
            public static ToInt64 ($value: System.ReadOnlySpan$1<number>) : bigint
            public static ToUInt16 ($value: System.Array$1<number>, $startIndex: number) : number
            public static ToUInt16 ($value: System.ReadOnlySpan$1<number>) : number
            public static ToUInt32 ($value: System.Array$1<number>, $startIndex: number) : number
            public static ToUInt32 ($value: System.ReadOnlySpan$1<number>) : number
            public static ToUInt64 ($value: System.Array$1<number>, $startIndex: number) : bigint
            public static ToUInt64 ($value: System.ReadOnlySpan$1<number>) : bigint
            public static ToHalf ($value: System.Array$1<number>, $startIndex: number) : System.Half
            public static ToHalf ($value: System.ReadOnlySpan$1<number>) : System.Half
            public static ToSingle ($value: System.Array$1<number>, $startIndex: number) : number
            public static ToSingle ($value: System.ReadOnlySpan$1<number>) : number
            public static ToDouble ($value: System.Array$1<number>, $startIndex: number) : number
            public static ToDouble ($value: System.ReadOnlySpan$1<number>) : number
            public static ToString ($value: System.Array$1<number>, $startIndex: number, $length: number) : string
            public static ToString ($value: System.Array$1<number>) : string
            public static ToString ($value: System.Array$1<number>, $startIndex: number) : string
            public static ToBoolean ($value: System.Array$1<number>, $startIndex: number) : boolean
            public static ToBoolean ($value: System.ReadOnlySpan$1<number>) : boolean
            public static DoubleToInt64Bits ($value: number) : bigint
            public static Int64BitsToDouble ($value: bigint) : number
            public static SingleToInt32Bits ($value: number) : number
            public static Int32BitsToSingle ($value: number) : number
            public static HalfToInt16Bits ($value: System.Half) : number
            public static Int16BitsToHalf ($value: number) : System.Half
            public static DoubleToUInt64Bits ($value: number) : bigint
            public static UInt64BitsToDouble ($value: bigint) : number
            public static SingleToUInt32Bits ($value: number) : number
            public static UInt32BitsToSingle ($value: number) : number
            public static HalfToUInt16Bits ($value: System.Half) : number
            public static UInt16BitsToHalf ($value: number) : System.Half
            public ToString () : string
        }
        class Half extends System.ValueType implements System.IComparable, System.ISpanFormattable, System.IFormattable, System.IComparable$1<System.Half>, System.IEquatable$1<System.Half>, System.IBinaryFloatingPoint$1<System.Half>, System.IBinaryNumber$1<System.Half>, System.IBitwiseOperators$3<System.Half, System.Half, System.Half>, System.INumber$1<System.Half>, System.IAdditionOperators$3<System.Half, System.Half, System.Half>, System.IAdditiveIdentity$2<System.Half, System.Half>, System.IComparisonOperators$2<System.Half, System.Half>, System.IEqualityOperators$2<System.Half, System.Half>, System.IDecrementOperators$1<System.Half>, System.IDivisionOperators$3<System.Half, System.Half, System.Half>, System.IIncrementOperators$1<System.Half>, System.IModulusOperators$3<System.Half, System.Half, System.Half>, System.IMultiplicativeIdentity$2<System.Half, System.Half>, System.IMultiplyOperators$3<System.Half, System.Half, System.Half>, System.ISpanParseable$1<System.Half>, System.IParseable$1<System.Half>, System.ISubtractionOperators$3<System.Half, System.Half, System.Half>, System.IUnaryNegationOperators$2<System.Half, System.Half>, System.IUnaryPlusOperators$2<System.Half, System.Half>, System.IFloatingPoint$1<System.Half>, System.ISignedNumber$1<System.Half>, System.IMinMaxValue$1<System.Half>
        {
            public static get Epsilon(): System.Half;
            public static get PositiveInfinity(): System.Half;
            public static get NegativeInfinity(): System.Half;
            public static get NaN(): System.Half;
            public static get MinValue(): System.Half;
            public static get MaxValue(): System.Half;
            public static op_LessThan ($left: System.Half, $right: System.Half) : boolean
            public static op_GreaterThan ($left: System.Half, $right: System.Half) : boolean
            public static op_LessThanOrEqual ($left: System.Half, $right: System.Half) : boolean
            public static op_GreaterThanOrEqual ($left: System.Half, $right: System.Half) : boolean
            public static op_Equality ($left: System.Half, $right: System.Half) : boolean
            public static op_Inequality ($left: System.Half, $right: System.Half) : boolean
            public static IsFinite ($value: System.Half) : boolean
            public static IsInfinity ($value: System.Half) : boolean
            public static IsNaN ($value: System.Half) : boolean
            public static IsNegative ($value: System.Half) : boolean
            public static IsNegativeInfinity ($value: System.Half) : boolean
            public static IsNormal ($value: System.Half) : boolean
            public static IsPositiveInfinity ($value: System.Half) : boolean
            public static IsSubnormal ($value: System.Half) : boolean
            public static Parse ($s: string) : System.Half
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : System.Half
            public static Parse ($s: string, $provider: System.IFormatProvider) : System.Half
            public static Parse ($s: string, $style?: System.Globalization.NumberStyles, $provider?: System.IFormatProvider) : System.Half
            public static Parse ($s: System.ReadOnlySpan$1<number>, $style?: System.Globalization.NumberStyles, $provider?: System.IFormatProvider) : System.Half
            public static TryParse ($s: string, $result: $Ref<System.Half>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<System.Half>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<System.Half>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<System.Half>) : boolean
            public CompareTo ($obj: any) : number
            public CompareTo ($other: System.Half) : number
            public Equals ($obj: any) : boolean
            public Equals ($other: System.Half) : boolean
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider) : boolean
            public static op_Explicit ($value: number) : System.Half
            public static op_Explicit ($value: System.Half) : number
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class CannotUnloadAppDomainException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class CLSCompliantAttribute extends System.Attribute
        {
            public get IsCompliant(): boolean;
            public constructor ($isCompliant: boolean)
            public constructor ()
        }
        class ContextBoundObject extends System.MarshalByRefObject
        {
        }
        class ContextMarshalException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class ContextStaticAttribute extends System.Attribute
        {
            public constructor ()
        }
        class Convert extends System.Object
        {
            public static DBNull : any
            public static ToDateTime ($value: any) : Date
            public static ToDateTime ($value: any, $provider: System.IFormatProvider) : Date
            public static ToDateTime ($value: string) : Date
            public static ToDateTime ($value: string, $provider: System.IFormatProvider) : Date
            public static ToDateTime ($value: number) : Date
            public static ToDateTime ($value: bigint) : Date
            public static ToDateTime ($value: boolean) : Date
            public static ToDateTime ($value: System.Decimal) : Date
            public static ToString ($value: any) : string
            public static ToString ($value: any, $provider: System.IFormatProvider) : string
            public static ToString ($value: boolean) : string
            public static ToString ($value: boolean, $provider: System.IFormatProvider) : string
            public static ToString ($value: number) : string
            public static ToString ($value: number, $provider: System.IFormatProvider) : string
            public static ToString ($value: bigint) : string
            public static ToString ($value: bigint, $provider: System.IFormatProvider) : string
            public static ToString ($value: System.Decimal) : string
            public static ToString ($value: System.Decimal, $provider: System.IFormatProvider) : string
            public static ToString ($value: Date) : string
            public static ToString ($value: Date, $provider: System.IFormatProvider) : string
            public static ToString ($value: string) : string
            public static ToString ($value: string, $provider: System.IFormatProvider) : string
            public static ToByte ($value: string, $fromBase: number) : number
            public static ToSByte ($value: string, $fromBase: number) : number
            public static ToInt16 ($value: string, $fromBase: number) : number
            public static ToUInt16 ($value: string, $fromBase: number) : number
            public static ToInt32 ($value: string, $fromBase: number) : number
            public static ToUInt32 ($value: string, $fromBase: number) : number
            public static ToInt64 ($value: string, $fromBase: number) : bigint
            public static ToUInt64 ($value: string, $fromBase: number) : bigint
            public static ToString ($value: number, $toBase: number) : string
            public static ToString ($value: bigint, $toBase: number) : string
            public static ToBase64String ($inArray: System.Array$1<number>) : string
            public static ToBase64String ($inArray: System.Array$1<number>, $options: System.Base64FormattingOptions) : string
            public static ToBase64String ($inArray: System.Array$1<number>, $offset: number, $length: number) : string
            public static ToBase64String ($inArray: System.Array$1<number>, $offset: number, $length: number, $options: System.Base64FormattingOptions) : string
            public static ToBase64String ($bytes: System.ReadOnlySpan$1<number>, $options?: System.Base64FormattingOptions) : string
            public static ToBase64CharArray ($inArray: System.Array$1<number>, $offsetIn: number, $length: number, $outArray: System.Array$1<number>, $offsetOut: number) : number
            public static ToBase64CharArray ($inArray: System.Array$1<number>, $offsetIn: number, $length: number, $outArray: System.Array$1<number>, $offsetOut: number, $options: System.Base64FormattingOptions) : number
            public static TryToBase64Chars ($bytes: System.ReadOnlySpan$1<number>, $chars: System.Span$1<number>, $charsWritten: $Ref<number>, $options?: System.Base64FormattingOptions) : boolean
            public static FromBase64String ($s: string) : System.Array$1<number>
            public static TryFromBase64String ($s: string, $bytes: System.Span$1<number>, $bytesWritten: $Ref<number>) : boolean
            public static TryFromBase64Chars ($chars: System.ReadOnlySpan$1<number>, $bytes: System.Span$1<number>, $bytesWritten: $Ref<number>) : boolean
            public static FromBase64CharArray ($inArray: System.Array$1<number>, $offset: number, $length: number) : System.Array$1<number>
            public static FromHexString ($s: string) : System.Array$1<number>
            public static FromHexString ($chars: System.ReadOnlySpan$1<number>) : System.Array$1<number>
            public static ToHexString ($inArray: System.Array$1<number>) : string
            public static ToHexString ($inArray: System.Array$1<number>, $offset: number, $length: number) : string
            public static ToHexString ($bytes: System.ReadOnlySpan$1<number>) : string
            public static ToInt64 ($value: number) : bigint
            public static ToInt64 ($value: bigint) : bigint
            public static ToInt64 ($value: System.Decimal) : bigint
            public static ToInt64 ($value: string) : bigint
            public static ToInt64 ($value: string, $provider: System.IFormatProvider) : bigint
            public static ToInt64 ($value: Date) : bigint
            public static ToUInt64 ($value: any) : bigint
            public static ToUInt64 ($value: any, $provider: System.IFormatProvider) : bigint
            public static ToUInt64 ($value: boolean) : bigint
            public static ToUInt64 ($value: number) : bigint
            public static ToUInt64 ($value: bigint) : bigint
            public static ToUInt64 ($value: System.Decimal) : bigint
            public static ToUInt64 ($value: string) : bigint
            public static ToUInt64 ($value: string, $provider: System.IFormatProvider) : bigint
            public static ToUInt64 ($value: Date) : bigint
            public static ToSingle ($value: any) : number
            public static ToSingle ($value: any, $provider: System.IFormatProvider) : number
            public static ToSingle ($value: number) : number
            public static ToSingle ($value: bigint) : number
            public static ToSingle ($value: System.Decimal) : number
            public static ToSingle ($value: string) : number
            public static ToSingle ($value: string, $provider: System.IFormatProvider) : number
            public static ToSingle ($value: boolean) : number
            public static ToSingle ($value: Date) : number
            public static ToDouble ($value: any) : number
            public static ToDouble ($value: any, $provider: System.IFormatProvider) : number
            public static ToDouble ($value: number) : number
            public static ToDouble ($value: bigint) : number
            public static ToDouble ($value: System.Decimal) : number
            public static ToDouble ($value: string) : number
            public static ToDouble ($value: string, $provider: System.IFormatProvider) : number
            public static ToDouble ($value: boolean) : number
            public static ToDouble ($value: Date) : number
            public static ToDecimal ($value: any) : System.Decimal
            public static ToDecimal ($value: any, $provider: System.IFormatProvider) : System.Decimal
            public static ToDecimal ($value: number) : System.Decimal
            public static ToDecimal ($value: bigint) : System.Decimal
            public static ToDecimal ($value: string) : System.Decimal
            public static ToDecimal ($value: string, $provider: System.IFormatProvider) : System.Decimal
            public static ToDecimal ($value: System.Decimal) : System.Decimal
            public static ToDecimal ($value: boolean) : System.Decimal
            public static ToDecimal ($value: Date) : System.Decimal
            public static ToDateTime ($value: Date) : Date
            public static ToByte ($value: bigint) : number
            public static ToByte ($value: number) : number
            public static ToByte ($value: System.Decimal) : number
            public static ToByte ($value: string) : number
            public static ToByte ($value: string, $provider: System.IFormatProvider) : number
            public static ToByte ($value: Date) : number
            public static ToInt16 ($value: any) : number
            public static ToInt16 ($value: any, $provider: System.IFormatProvider) : number
            public static ToInt16 ($value: boolean) : number
            public static ToInt16 ($value: number) : number
            public static ToInt16 ($value: bigint) : number
            public static ToInt16 ($value: System.Decimal) : number
            public static ToInt16 ($value: string) : number
            public static ToInt16 ($value: string, $provider: System.IFormatProvider) : number
            public static ToInt16 ($value: Date) : number
            public static ToUInt16 ($value: any) : number
            public static ToUInt16 ($value: any, $provider: System.IFormatProvider) : number
            public static ToUInt16 ($value: boolean) : number
            public static ToUInt16 ($value: number) : number
            public static ToUInt16 ($value: bigint) : number
            public static ToUInt16 ($value: System.Decimal) : number
            public static ToUInt16 ($value: string) : number
            public static ToUInt16 ($value: string, $provider: System.IFormatProvider) : number
            public static ToUInt16 ($value: Date) : number
            public static ToInt32 ($value: any) : number
            public static ToInt32 ($value: any, $provider: System.IFormatProvider) : number
            public static ToInt32 ($value: boolean) : number
            public static ToInt32 ($value: number) : number
            public static ToInt32 ($value: bigint) : number
            public static ToInt32 ($value: System.Decimal) : number
            public static ToInt32 ($value: string) : number
            public static ToInt32 ($value: string, $provider: System.IFormatProvider) : number
            public static ToInt32 ($value: Date) : number
            public static ToUInt32 ($value: any) : number
            public static ToUInt32 ($value: any, $provider: System.IFormatProvider) : number
            public static ToUInt32 ($value: boolean) : number
            public static ToUInt32 ($value: number) : number
            public static ToUInt32 ($value: bigint) : number
            public static ToUInt32 ($value: System.Decimal) : number
            public static ToUInt32 ($value: string) : number
            public static ToUInt32 ($value: string, $provider: System.IFormatProvider) : number
            public static ToUInt32 ($value: Date) : number
            public static ToInt64 ($value: any) : bigint
            public static ToInt64 ($value: any, $provider: System.IFormatProvider) : bigint
            public static ToInt64 ($value: boolean) : bigint
            public static GetTypeCode ($value: any) : System.TypeCode
            public static IsDBNull ($value: any) : boolean
            public static ChangeType ($value: any, $typeCode: System.TypeCode) : any
            public static ChangeType ($value: any, $typeCode: System.TypeCode, $provider: System.IFormatProvider) : any
            public static ChangeType ($value: any, $conversionType: System.Type) : any
            public static ChangeType ($value: any, $conversionType: System.Type, $provider: System.IFormatProvider) : any
            public static ToBoolean ($value: any) : boolean
            public static ToBoolean ($value: any, $provider: System.IFormatProvider) : boolean
            public static ToBoolean ($value: boolean) : boolean
            public static ToBoolean ($value: number) : boolean
            public static ToBoolean ($value: bigint) : boolean
            public static ToBoolean ($value: string) : boolean
            public static ToBoolean ($value: string, $provider: System.IFormatProvider) : boolean
            public static ToBoolean ($value: System.Decimal) : boolean
            public static ToBoolean ($value: Date) : boolean
            public static ToChar ($value: any) : number
            public static ToChar ($value: any, $provider: System.IFormatProvider) : number
            public static ToChar ($value: boolean) : number
            public static ToChar ($value: number) : number
            public static ToChar ($value: bigint) : number
            public static ToChar ($value: string) : number
            public static ToChar ($value: string, $provider: System.IFormatProvider) : number
            public static ToChar ($value: System.Decimal) : number
            public static ToChar ($value: Date) : number
            public static ToSByte ($value: any) : number
            public static ToSByte ($value: any, $provider: System.IFormatProvider) : number
            public static ToSByte ($value: boolean) : number
            public static ToSByte ($value: number) : number
            public static ToSByte ($value: bigint) : number
            public static ToSByte ($value: System.Decimal) : number
            public static ToSByte ($value: string) : number
            public static ToSByte ($value: string, $provider: System.IFormatProvider) : number
            public static ToSByte ($value: Date) : number
            public static ToByte ($value: any) : number
            public static ToByte ($value: any, $provider: System.IFormatProvider) : number
            public static ToByte ($value: boolean) : number
            public ToString () : string
        }
        class DateTime extends System.ValueType implements System.IComparable, System.ISpanFormattable, System.IFormattable, System.IConvertible, System.IComparable$1<Date>, System.IEquatable$1<Date>, System.Runtime.Serialization.ISerializable, System.IAdditionOperators$3<Date, System.TimeSpan, Date>, System.IAdditiveIdentity$2<Date, System.TimeSpan>, System.IComparisonOperators$2<Date, Date>, System.IEqualityOperators$2<Date, Date>, System.IMinMaxValue$1<Date>, System.ISpanParseable$1<Date>, System.IParseable$1<Date>, System.ISubtractionOperators$3<Date, System.TimeSpan, Date>, System.ISubtractionOperators$3<Date, Date, System.TimeSpan>
        {
            public static MinValue : Date
            public static MaxValue : Date
            public static UnixEpoch : Date
            public get Date(): Date;
            public get Day(): number;
            public get DayOfWeek(): System.DayOfWeek;
            public get DayOfYear(): number;
            public get Hour(): number;
            public get Kind(): System.DateTimeKind;
            public get Millisecond(): number;
            public get Minute(): number;
            public get Month(): number;
            public static get Now(): Date;
            public get Second(): number;
            public get Ticks(): bigint;
            public get TimeOfDay(): System.TimeSpan;
            public static get Today(): Date;
            public get Year(): number;
            public static get UtcNow(): Date;
            public static Parse ($s: string, $provider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles) : Date
            public static Parse ($s: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider, $styles?: System.Globalization.DateTimeStyles) : Date
            public static ParseExact ($s: string, $format: string, $provider: System.IFormatProvider) : Date
            public static ParseExact ($s: string, $format: string, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles) : Date
            public static ParseExact ($s: System.ReadOnlySpan$1<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider, $style?: System.Globalization.DateTimeStyles) : Date
            public static ParseExact ($s: string, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles) : Date
            public static ParseExact ($s: System.ReadOnlySpan$1<number>, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style?: System.Globalization.DateTimeStyles) : Date
            public Subtract ($value: Date) : System.TimeSpan
            public Subtract ($value: System.TimeSpan) : Date
            public ToOADate () : number
            public ToFileTime () : bigint
            public ToFileTimeUtc () : bigint
            public ToLocalTime () : Date
            public ToLongDateString () : string
            public ToLongTimeString () : string
            public ToShortDateString () : string
            public ToShortTimeString () : string
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider) : boolean
            public ToUniversalTime () : Date
            public static TryParse ($s: string, $result: $Ref<Date>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<Date>) : boolean
            public static TryParse ($s: string, $provider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles, $result: $Ref<Date>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles, $result: $Ref<Date>) : boolean
            public static TryParseExact ($s: string, $format: string, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<Date>) : boolean
            public static TryParseExact ($s: System.ReadOnlySpan$1<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<Date>) : boolean
            public static TryParseExact ($s: string, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<Date>) : boolean
            public static TryParseExact ($s: System.ReadOnlySpan$1<number>, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<Date>) : boolean
            public static op_Addition ($d: Date, $t: System.TimeSpan) : Date
            public static op_Subtraction ($d: Date, $t: System.TimeSpan) : Date
            public static op_Subtraction ($d1: Date, $d2: Date) : System.TimeSpan
            public static op_Equality ($d1: Date, $d2: Date) : boolean
            public static op_Inequality ($d1: Date, $d2: Date) : boolean
            public static op_LessThan ($t1: Date, $t2: Date) : boolean
            public static op_LessThanOrEqual ($t1: Date, $t2: Date) : boolean
            public static op_GreaterThan ($t1: Date, $t2: Date) : boolean
            public static op_GreaterThanOrEqual ($t1: Date, $t2: Date) : boolean
            public GetDateTimeFormats () : System.Array$1<string>
            public GetDateTimeFormats ($provider: System.IFormatProvider) : System.Array$1<string>
            public GetDateTimeFormats ($format: number) : System.Array$1<string>
            public GetDateTimeFormats ($format: number, $provider: System.IFormatProvider) : System.Array$1<string>
            public GetTypeCode () : System.TypeCode
            public Add ($value: System.TimeSpan) : Date
            public AddDays ($value: number) : Date
            public AddHours ($value: number) : Date
            public AddMilliseconds ($value: number) : Date
            public AddMinutes ($value: number) : Date
            public AddMonths ($months: number) : Date
            public AddSeconds ($value: number) : Date
            public AddTicks ($value: bigint) : Date
            public AddYears ($value: number) : Date
            public static Compare ($t1: Date, $t2: Date) : number
            public CompareTo ($value: any) : number
            public CompareTo ($value: Date) : number
            public static DaysInMonth ($year: number, $month: number) : number
            public Equals ($value: any) : boolean
            public Equals ($value: Date) : boolean
            public static Equals ($t1: Date, $t2: Date) : boolean
            public static FromBinary ($dateData: bigint) : Date
            public static FromFileTime ($fileTime: bigint) : Date
            public static FromFileTimeUtc ($fileTime: bigint) : Date
            public static FromOADate ($d: number) : Date
            public IsDaylightSavingTime () : boolean
            public static SpecifyKind ($value: Date, $kind: System.DateTimeKind) : Date
            public ToBinary () : bigint
            public static IsLeapYear ($year: number) : boolean
            public static Parse ($s: string) : Date
            public static Parse ($s: string, $provider: System.IFormatProvider) : Date
            public constructor ($ticks: bigint)
            public constructor ($ticks: bigint, $kind: System.DateTimeKind)
            public constructor ($year: number, $month: number, $day: number)
            public constructor ($year: number, $month: number, $day: number, $calendar: System.Globalization.Calendar)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $kind: System.DateTimeKind)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $calendar: System.Globalization.Calendar)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $kind: System.DateTimeKind)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $calendar: System.Globalization.Calendar)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $calendar: System.Globalization.Calendar, $kind: System.DateTimeKind)
            public CompareTo ($obj: any) : number
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        enum Base64FormattingOptions
        { None = 0, InsertLineBreaks = 1 }
        class DataMisalignedException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class DateOnly extends System.ValueType implements System.IComparable, System.IComparable$1<System.DateOnly>, System.IEquatable$1<System.DateOnly>, System.ISpanFormattable, System.IFormattable, System.IComparisonOperators$2<System.DateOnly, System.DateOnly>, System.IEqualityOperators$2<System.DateOnly, System.DateOnly>, System.IMinMaxValue$1<System.DateOnly>, System.ISpanParseable$1<System.DateOnly>, System.IParseable$1<System.DateOnly>
        {
            public static get MinValue(): System.DateOnly;
            public static get MaxValue(): System.DateOnly;
            public get Year(): number;
            public get Month(): number;
            public get Day(): number;
            public get DayOfWeek(): System.DayOfWeek;
            public get DayOfYear(): number;
            public get DayNumber(): number;
            public static FromDayNumber ($dayNumber: number) : System.DateOnly
            public AddDays ($value: number) : System.DateOnly
            public AddMonths ($value: number) : System.DateOnly
            public AddYears ($value: number) : System.DateOnly
            public static op_Equality ($left: System.DateOnly, $right: System.DateOnly) : boolean
            public static op_Inequality ($left: System.DateOnly, $right: System.DateOnly) : boolean
            public static op_GreaterThan ($left: System.DateOnly, $right: System.DateOnly) : boolean
            public static op_GreaterThanOrEqual ($left: System.DateOnly, $right: System.DateOnly) : boolean
            public static op_LessThan ($left: System.DateOnly, $right: System.DateOnly) : boolean
            public static op_LessThanOrEqual ($left: System.DateOnly, $right: System.DateOnly) : boolean
            public ToDateTime ($time: System.TimeOnly) : Date
            public ToDateTime ($time: System.TimeOnly, $kind: System.DateTimeKind) : Date
            public static FromDateTime ($dateTime: Date) : System.DateOnly
            public CompareTo ($value: System.DateOnly) : number
            public CompareTo ($value: any) : number
            public Equals ($value: System.DateOnly) : boolean
            public Equals ($value: any) : boolean
            public static Parse ($s: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider, $style?: System.Globalization.DateTimeStyles) : System.DateOnly
            public static ParseExact ($s: System.ReadOnlySpan$1<number>, $format: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider, $style?: System.Globalization.DateTimeStyles) : System.DateOnly
            public static ParseExact ($s: System.ReadOnlySpan$1<number>, $formats: System.Array$1<string>) : System.DateOnly
            public static ParseExact ($s: System.ReadOnlySpan$1<number>, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style?: System.Globalization.DateTimeStyles) : System.DateOnly
            public static Parse ($s: string) : System.DateOnly
            public static Parse ($s: string, $provider: System.IFormatProvider, $style?: System.Globalization.DateTimeStyles) : System.DateOnly
            public static ParseExact ($s: string, $format: string) : System.DateOnly
            public static ParseExact ($s: string, $format: string, $provider: System.IFormatProvider, $style?: System.Globalization.DateTimeStyles) : System.DateOnly
            public static ParseExact ($s: string, $formats: System.Array$1<string>) : System.DateOnly
            public static ParseExact ($s: string, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style?: System.Globalization.DateTimeStyles) : System.DateOnly
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<System.DateOnly>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<System.DateOnly>) : boolean
            public static TryParseExact ($s: System.ReadOnlySpan$1<number>, $format: System.ReadOnlySpan$1<number>, $result: $Ref<System.DateOnly>) : boolean
            public static TryParseExact ($s: System.ReadOnlySpan$1<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<System.DateOnly>) : boolean
            public static TryParseExact ($s: System.ReadOnlySpan$1<number>, $formats: System.Array$1<string>, $result: $Ref<System.DateOnly>) : boolean
            public static TryParseExact ($s: System.ReadOnlySpan$1<number>, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<System.DateOnly>) : boolean
            public static TryParse ($s: string, $result: $Ref<System.DateOnly>) : boolean
            public static TryParse ($s: string, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<System.DateOnly>) : boolean
            public static TryParseExact ($s: string, $format: string, $result: $Ref<System.DateOnly>) : boolean
            public static TryParseExact ($s: string, $format: string, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<System.DateOnly>) : boolean
            public static TryParseExact ($s: string, $formats: System.Array$1<string>, $result: $Ref<System.DateOnly>) : boolean
            public static TryParseExact ($s: string, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<System.DateOnly>) : boolean
            public ToLongDateString () : string
            public ToShortDateString () : string
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider) : boolean
            public constructor ($year: number, $month: number, $day: number)
            public constructor ($year: number, $month: number, $day: number, $calendar: System.Globalization.Calendar)
            public CompareTo ($obj: any) : number
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        enum DayOfWeek
        { Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6 }
        class TimeOnly extends System.ValueType implements System.IComparable, System.IComparable$1<System.TimeOnly>, System.IEquatable$1<System.TimeOnly>, System.ISpanFormattable, System.IFormattable, System.IComparisonOperators$2<System.TimeOnly, System.TimeOnly>, System.IEqualityOperators$2<System.TimeOnly, System.TimeOnly>, System.IMinMaxValue$1<System.TimeOnly>, System.ISpanParseable$1<System.TimeOnly>, System.IParseable$1<System.TimeOnly>, System.ISubtractionOperators$3<System.TimeOnly, System.TimeOnly, System.TimeSpan>
        {
            public static get MinValue(): System.TimeOnly;
            public static get MaxValue(): System.TimeOnly;
            public get Hour(): number;
            public get Minute(): number;
            public get Second(): number;
            public get Millisecond(): number;
            public get Ticks(): bigint;
            public Add ($value: System.TimeSpan) : System.TimeOnly
            public Add ($value: System.TimeSpan, $wrappedDays: $Ref<number>) : System.TimeOnly
            public AddHours ($value: number) : System.TimeOnly
            public AddHours ($value: number, $wrappedDays: $Ref<number>) : System.TimeOnly
            public AddMinutes ($value: number) : System.TimeOnly
            public AddMinutes ($value: number, $wrappedDays: $Ref<number>) : System.TimeOnly
            public IsBetween ($start: System.TimeOnly, $end: System.TimeOnly) : boolean
            public static op_Equality ($left: System.TimeOnly, $right: System.TimeOnly) : boolean
            public static op_Inequality ($left: System.TimeOnly, $right: System.TimeOnly) : boolean
            public static op_GreaterThan ($left: System.TimeOnly, $right: System.TimeOnly) : boolean
            public static op_GreaterThanOrEqual ($left: System.TimeOnly, $right: System.TimeOnly) : boolean
            public static op_LessThan ($left: System.TimeOnly, $right: System.TimeOnly) : boolean
            public static op_LessThanOrEqual ($left: System.TimeOnly, $right: System.TimeOnly) : boolean
            public static op_Subtraction ($t1: System.TimeOnly, $t2: System.TimeOnly) : System.TimeSpan
            public static FromTimeSpan ($timeSpan: System.TimeSpan) : System.TimeOnly
            public static FromDateTime ($dateTime: Date) : System.TimeOnly
            public ToTimeSpan () : System.TimeSpan
            public CompareTo ($value: System.TimeOnly) : number
            public CompareTo ($value: any) : number
            public Equals ($value: System.TimeOnly) : boolean
            public Equals ($value: any) : boolean
            public static Parse ($s: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider, $style?: System.Globalization.DateTimeStyles) : System.TimeOnly
            public static ParseExact ($s: System.ReadOnlySpan$1<number>, $format: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider, $style?: System.Globalization.DateTimeStyles) : System.TimeOnly
            public static ParseExact ($s: System.ReadOnlySpan$1<number>, $formats: System.Array$1<string>) : System.TimeOnly
            public static ParseExact ($s: System.ReadOnlySpan$1<number>, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style?: System.Globalization.DateTimeStyles) : System.TimeOnly
            public static Parse ($s: string) : System.TimeOnly
            public static Parse ($s: string, $provider: System.IFormatProvider, $style?: System.Globalization.DateTimeStyles) : System.TimeOnly
            public static ParseExact ($s: string, $format: string) : System.TimeOnly
            public static ParseExact ($s: string, $format: string, $provider: System.IFormatProvider, $style?: System.Globalization.DateTimeStyles) : System.TimeOnly
            public static ParseExact ($s: string, $formats: System.Array$1<string>) : System.TimeOnly
            public static ParseExact ($s: string, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style?: System.Globalization.DateTimeStyles) : System.TimeOnly
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $result: $Ref<System.TimeOnly>) : boolean
            public static TryParse ($s: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<System.TimeOnly>) : boolean
            public static TryParseExact ($s: System.ReadOnlySpan$1<number>, $format: System.ReadOnlySpan$1<number>, $result: $Ref<System.TimeOnly>) : boolean
            public static TryParseExact ($s: System.ReadOnlySpan$1<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<System.TimeOnly>) : boolean
            public static TryParseExact ($s: System.ReadOnlySpan$1<number>, $formats: System.Array$1<string>, $result: $Ref<System.TimeOnly>) : boolean
            public static TryParseExact ($s: System.ReadOnlySpan$1<number>, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<System.TimeOnly>) : boolean
            public static TryParse ($s: string, $result: $Ref<System.TimeOnly>) : boolean
            public static TryParse ($s: string, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<System.TimeOnly>) : boolean
            public static TryParseExact ($s: string, $format: string, $result: $Ref<System.TimeOnly>) : boolean
            public static TryParseExact ($s: string, $format: string, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<System.TimeOnly>) : boolean
            public static TryParseExact ($s: string, $formats: System.Array$1<string>, $result: $Ref<System.TimeOnly>) : boolean
            public static TryParseExact ($s: string, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<System.TimeOnly>) : boolean
            public ToLongTimeString () : string
            public ToShortTimeString () : string
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $provider?: System.IFormatProvider) : boolean
            public constructor ($hour: number, $minute: number)
            public constructor ($hour: number, $minute: number, $second: number)
            public constructor ($hour: number, $minute: number, $second: number, $millisecond: number)
            public constructor ($ticks: bigint)
            public CompareTo ($obj: any) : number
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        enum DateTimeKind
        { Unspecified = 0, Utc = 1, Local = 2 }
        class DateTimeOffset extends System.ValueType implements System.IComparable, System.ISpanFormattable, System.IFormattable, System.IComparable$1<System.DateTimeOffset>, System.IEquatable$1<System.DateTimeOffset>, System.Runtime.Serialization.ISerializable, System.Runtime.Serialization.IDeserializationCallback, System.IAdditionOperators$3<System.DateTimeOffset, System.TimeSpan, System.DateTimeOffset>, System.IAdditiveIdentity$2<System.DateTimeOffset, System.TimeSpan>, System.IComparisonOperators$2<System.DateTimeOffset, System.DateTimeOffset>, System.IEqualityOperators$2<System.DateTimeOffset, System.DateTimeOffset>, System.IMinMaxValue$1<System.DateTimeOffset>, System.ISpanParseable$1<System.DateTimeOffset>, System.IParseable$1<System.DateTimeOffset>, System.ISubtractionOperators$3<System.DateTimeOffset, System.TimeSpan, System.DateTimeOffset>, System.ISubtractionOperators$3<System.DateTimeOffset, System.DateTimeOffset, System.TimeSpan>
        {
            public static MinValue : System.DateTimeOffset
            public static MaxValue : System.DateTimeOffset
            public static UnixEpoch : System.DateTimeOffset
            public static get Now(): System.DateTimeOffset;
            public static get UtcNow(): System.DateTimeOffset;
            public get DateTime(): Date;
            public get UtcDateTime(): Date;
            public get LocalDateTime(): Date;
            public get Date(): Date;
            public get Day(): number;
            public get DayOfWeek(): System.DayOfWeek;
            public get DayOfYear(): number;
            public get Hour(): number;
            public get Millisecond(): number;
            public get Minute(): number;
            public get Month(): number;
            public get Offset(): System.TimeSpan;
            public get Second(): number;
            public get Ticks(): bigint;
            public get UtcTicks(): bigint;
            public get TimeOfDay(): System.TimeSpan;
            public get Year(): number;
            public static TryParse ($input: string, $result: $Ref<System.DateTimeOffset>) : boolean
            public static TryParse ($input: System.ReadOnlySpan$1<number>, $result: $Ref<System.DateTimeOffset>) : boolean
            public static TryParse ($input: string, $formatProvider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles, $result: $Ref<System.DateTimeOffset>) : boolean
            public static TryParse ($input: System.ReadOnlySpan$1<number>, $formatProvider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles, $result: $Ref<System.DateTimeOffset>) : boolean
            public static TryParseExact ($input: string, $format: string, $formatProvider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles, $result: $Ref<System.DateTimeOffset>) : boolean
            public static TryParseExact ($input: System.ReadOnlySpan$1<number>, $format: System.ReadOnlySpan$1<number>, $formatProvider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles, $result: $Ref<System.DateTimeOffset>) : boolean
            public static TryParseExact ($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles, $result: $Ref<System.DateTimeOffset>) : boolean
            public static TryParseExact ($input: System.ReadOnlySpan$1<number>, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles, $result: $Ref<System.DateTimeOffset>) : boolean
            public static op_Implicit ($dateTime: Date) : System.DateTimeOffset
            public static op_Addition ($dateTimeOffset: System.DateTimeOffset, $timeSpan: System.TimeSpan) : System.DateTimeOffset
            public static op_Subtraction ($dateTimeOffset: System.DateTimeOffset, $timeSpan: System.TimeSpan) : System.DateTimeOffset
            public static op_Subtraction ($left: System.DateTimeOffset, $right: System.DateTimeOffset) : System.TimeSpan
            public static op_Equality ($left: System.DateTimeOffset, $right: System.DateTimeOffset) : boolean
            public static op_Inequality ($left: System.DateTimeOffset, $right: System.DateTimeOffset) : boolean
            public static op_LessThan ($left: System.DateTimeOffset, $right: System.DateTimeOffset) : boolean
            public static op_LessThanOrEqual ($left: System.DateTimeOffset, $right: System.DateTimeOffset) : boolean
            public static op_GreaterThan ($left: System.DateTimeOffset, $right: System.DateTimeOffset) : boolean
            public static op_GreaterThanOrEqual ($left: System.DateTimeOffset, $right: System.DateTimeOffset) : boolean
            public ToOffset ($offset: System.TimeSpan) : System.DateTimeOffset
            public Add ($timeSpan: System.TimeSpan) : System.DateTimeOffset
            public AddDays ($days: number) : System.DateTimeOffset
            public AddHours ($hours: number) : System.DateTimeOffset
            public AddMilliseconds ($milliseconds: number) : System.DateTimeOffset
            public AddMinutes ($minutes: number) : System.DateTimeOffset
            public AddMonths ($months: number) : System.DateTimeOffset
            public AddSeconds ($seconds: number) : System.DateTimeOffset
            public AddTicks ($ticks: bigint) : System.DateTimeOffset
            public AddYears ($years: number) : System.DateTimeOffset
            public static Compare ($first: System.DateTimeOffset, $second: System.DateTimeOffset) : number
            public CompareTo ($other: System.DateTimeOffset) : number
            public Equals ($obj: any) : boolean
            public Equals ($other: System.DateTimeOffset) : boolean
            public EqualsExact ($other: System.DateTimeOffset) : boolean
            public static Equals ($first: System.DateTimeOffset, $second: System.DateTimeOffset) : boolean
            public static FromFileTime ($fileTime: bigint) : System.DateTimeOffset
            public static FromUnixTimeSeconds ($seconds: bigint) : System.DateTimeOffset
            public static FromUnixTimeMilliseconds ($milliseconds: bigint) : System.DateTimeOffset
            public static Parse ($input: string) : System.DateTimeOffset
            public static Parse ($input: string, $formatProvider: System.IFormatProvider) : System.DateTimeOffset
            public static Parse ($input: string, $formatProvider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles) : System.DateTimeOffset
            public static Parse ($input: System.ReadOnlySpan$1<number>, $formatProvider?: System.IFormatProvider, $styles?: System.Globalization.DateTimeStyles) : System.DateTimeOffset
            public static ParseExact ($input: string, $format: string, $formatProvider: System.IFormatProvider) : System.DateTimeOffset
            public static ParseExact ($input: string, $format: string, $formatProvider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles) : System.DateTimeOffset
            public static ParseExact ($input: System.ReadOnlySpan$1<number>, $format: System.ReadOnlySpan$1<number>, $formatProvider: System.IFormatProvider, $styles?: System.Globalization.DateTimeStyles) : System.DateTimeOffset
            public static ParseExact ($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles) : System.DateTimeOffset
            public static ParseExact ($input: System.ReadOnlySpan$1<number>, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $styles?: System.Globalization.DateTimeStyles) : System.DateTimeOffset
            public Subtract ($value: System.DateTimeOffset) : System.TimeSpan
            public Subtract ($value: System.TimeSpan) : System.DateTimeOffset
            public ToFileTime () : bigint
            public ToUnixTimeSeconds () : bigint
            public ToUnixTimeMilliseconds () : bigint
            public ToLocalTime () : System.DateTimeOffset
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($formatProvider: System.IFormatProvider) : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format?: System.ReadOnlySpan$1<number>, $formatProvider?: System.IFormatProvider) : boolean
            public ToUniversalTime () : System.DateTimeOffset
            public constructor ($ticks: bigint, $offset: System.TimeSpan)
            public constructor ($dateTime: Date)
            public constructor ($dateTime: Date, $offset: System.TimeSpan)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $offset: System.TimeSpan)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $offset: System.TimeSpan)
            public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $calendar: System.Globalization.Calendar, $offset: System.TimeSpan)
            public CompareTo ($obj: any) : number
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class DBNull extends System.Object implements System.Runtime.Serialization.ISerializable, System.IConvertible
        {
            public static Value : System.DBNull
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public ToString () : string
            public ToString ($provider: System.IFormatProvider) : string
            public GetTypeCode () : System.TypeCode
            public ToBoolean ($provider: System.IFormatProvider) : boolean
            public ToChar ($provider: System.IFormatProvider) : number
            public ToSByte ($provider: System.IFormatProvider) : number
            public ToByte ($provider: System.IFormatProvider) : number
            public ToInt16 ($provider: System.IFormatProvider) : number
            public ToUInt16 ($provider: System.IFormatProvider) : number
            public ToInt32 ($provider: System.IFormatProvider) : number
            public ToUInt32 ($provider: System.IFormatProvider) : number
            public ToInt64 ($provider: System.IFormatProvider) : bigint
            public ToUInt64 ($provider: System.IFormatProvider) : bigint
            public ToSingle ($provider: System.IFormatProvider) : number
            public ToDouble ($provider: System.IFormatProvider) : number
            public ToDecimal ($provider: System.IFormatProvider) : System.Decimal
            public ToDateTime ($provider: System.IFormatProvider) : Date
            public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
        }
        class DivideByZeroException extends System.ArithmeticException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class DllNotFoundException extends System.TypeLoadException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
        }
        class DuplicateWaitObjectException extends System.ArgumentException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($parameterName: string)
            public constructor ($parameterName: string, $message: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($message: string)
            public constructor ($message: string, $paramName: string, $innerException: System.Exception)
            public constructor ($message: string, $paramName: string)
        }
        class EntryPointNotFoundException extends System.TypeLoadException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
        }
        class ExecutionEngineException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class FieldAccessException extends System.MemberAccessException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
        }
        class FlagsAttribute extends System.Attribute
        {
            public constructor ()
        }
        class FormatException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class FormattableString extends System.Object implements System.IFormattable
        {
            public get Format(): string;
            public get ArgumentCount(): number;
            public GetArguments () : System.Array$1<any>
            public GetArgument ($index: number) : any
            public ToString ($formatProvider: System.IFormatProvider) : string
            public static Invariant ($formattable: System.FormattableString) : string
            public static CurrentCulture ($formattable: System.FormattableString) : string
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
        }
        class GCGenerationInfo extends System.ValueType
        {
            public get SizeBeforeBytes(): bigint;
            public get FragmentationBeforeBytes(): bigint;
            public get SizeAfterBytes(): bigint;
            public get FragmentationAfterBytes(): bigint;
        }
        class HashCode extends System.ValueType
        {
            public AddBytes ($value: System.ReadOnlySpan$1<number>) : void
            public ToHashCode () : number
        }
        interface IAsyncDisposable
        {
            DisposeAsync () : System.Threading.Tasks.ValueTask
        }
        interface ICustomFormatter
        {
            Format ($format: string, $arg: any, $formatProvider: System.IFormatProvider) : string
        }
        class Index extends System.ValueType implements System.IEquatable$1<System.Index>
        {
            public static get Start(): System.Index;
            public static get End(): System.Index;
            public get Value(): number;
            public get IsFromEnd(): boolean;
            public static FromStart ($value: number) : System.Index
            public static FromEnd ($value: number) : System.Index
            public GetOffset ($length: number) : number
            public Equals ($value: any) : boolean
            public Equals ($other: System.Index) : boolean
            public static op_Implicit ($value: number) : System.Index
            public constructor ($value: number, $fromEnd?: boolean)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class IndexOutOfRangeException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class InsufficientExecutionStackException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class InsufficientMemoryException extends System.OutOfMemoryException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class OutOfMemoryException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class InvalidCastException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($message: string, $errorCode: number)
        }
        class InvalidOperationException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class InvalidProgramException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class InvalidTimeZoneException extends System.Exception implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        enum LoaderOptimization
        { DisallowBindings = 4, DomainMask = 3, MultiDomain = 2, MultiDomainHost = 3, NotSpecified = 0, SingleDomain = 1 }
        class LoaderOptimizationAttribute extends System.Attribute
        {
            public get Value(): System.LoaderOptimization;
            public constructor ($value: number)
            public constructor ($value: System.LoaderOptimization)
            public constructor ()
        }
        class LocalDataStoreSlot extends System.Object
        {
        }
        class MemoryExtensions extends System.Object
        {
            public static Trim ($memory: System.Memory$1<number>) : System.Memory$1<number>
            public static TrimStart ($memory: System.Memory$1<number>) : System.Memory$1<number>
            public static TrimEnd ($memory: System.Memory$1<number>) : System.Memory$1<number>
            public static Trim ($memory: System.ReadOnlyMemory$1<number>) : System.ReadOnlyMemory$1<number>
            public static TrimStart ($memory: System.ReadOnlyMemory$1<number>) : System.ReadOnlyMemory$1<number>
            public static TrimEnd ($memory: System.ReadOnlyMemory$1<number>) : System.ReadOnlyMemory$1<number>
            public static Trim ($span: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static TrimStart ($span: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static TrimEnd ($span: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static Trim ($span: System.ReadOnlySpan$1<number>, $trimChar: number) : System.ReadOnlySpan$1<number>
            public static TrimStart ($span: System.ReadOnlySpan$1<number>, $trimChar: number) : System.ReadOnlySpan$1<number>
            public static TrimEnd ($span: System.ReadOnlySpan$1<number>, $trimChar: number) : System.ReadOnlySpan$1<number>
            public static Trim ($span: System.ReadOnlySpan$1<number>, $trimChars: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static TrimStart ($span: System.ReadOnlySpan$1<number>, $trimChars: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static TrimEnd ($span: System.ReadOnlySpan$1<number>, $trimChars: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static Trim ($span: System.Span$1<number>) : System.Span$1<number>
            public static TrimStart ($span: System.Span$1<number>) : System.Span$1<number>
            public static TrimEnd ($span: System.Span$1<number>) : System.Span$1<number>
            public static TryWrite ($destination: System.Span$1<number>, $handler: $Ref<System.MemoryExtensions.TryWriteInterpolatedStringHandler>, $charsWritten: $Ref<number>) : boolean
            public static TryWrite ($destination: System.Span$1<number>, $provider: System.IFormatProvider, $handler: $Ref<System.MemoryExtensions.TryWriteInterpolatedStringHandler>, $charsWritten: $Ref<number>) : boolean
            public static IsWhiteSpace ($span: System.ReadOnlySpan$1<number>) : boolean
            public static Contains ($span: System.ReadOnlySpan$1<number>, $value: System.ReadOnlySpan$1<number>, $comparisonType: System.StringComparison) : boolean
            public static Equals ($span: System.ReadOnlySpan$1<number>, $other: System.ReadOnlySpan$1<number>, $comparisonType: System.StringComparison) : boolean
            public static CompareTo ($span: System.ReadOnlySpan$1<number>, $other: System.ReadOnlySpan$1<number>, $comparisonType: System.StringComparison) : number
            public static IndexOf ($span: System.ReadOnlySpan$1<number>, $value: System.ReadOnlySpan$1<number>, $comparisonType: System.StringComparison) : number
            public static LastIndexOf ($span: System.ReadOnlySpan$1<number>, $value: System.ReadOnlySpan$1<number>, $comparisonType: System.StringComparison) : number
            public static ToLower ($source: System.ReadOnlySpan$1<number>, $destination: System.Span$1<number>, $culture: System.Globalization.CultureInfo) : number
            public static ToLowerInvariant ($source: System.ReadOnlySpan$1<number>, $destination: System.Span$1<number>) : number
            public static ToUpper ($source: System.ReadOnlySpan$1<number>, $destination: System.Span$1<number>, $culture: System.Globalization.CultureInfo) : number
            public static ToUpperInvariant ($source: System.ReadOnlySpan$1<number>, $destination: System.Span$1<number>) : number
            public static EndsWith ($span: System.ReadOnlySpan$1<number>, $value: System.ReadOnlySpan$1<number>, $comparisonType: System.StringComparison) : boolean
            public static StartsWith ($span: System.ReadOnlySpan$1<number>, $value: System.ReadOnlySpan$1<number>, $comparisonType: System.StringComparison) : boolean
            public static EnumerateRunes ($span: System.ReadOnlySpan$1<number>) : System.Text.SpanRuneEnumerator
            public static EnumerateRunes ($span: System.Span$1<number>) : System.Text.SpanRuneEnumerator
            public static EnumerateLines ($span: System.ReadOnlySpan$1<number>) : System.Text.SpanLineEnumerator
            public static EnumerateLines ($span: System.Span$1<number>) : System.Text.SpanLineEnumerator
            public static AsSpan ($text: string) : System.ReadOnlySpan$1<number>
            public static AsSpan ($text: string, $start: number) : System.ReadOnlySpan$1<number>
            public static AsSpan ($text: string, $start: number, $length: number) : System.ReadOnlySpan$1<number>
            public static AsMemory ($text: string) : System.ReadOnlyMemory$1<number>
            public static AsMemory ($text: string, $start: number) : System.ReadOnlyMemory$1<number>
            public static AsMemory ($text: string, $startIndex: System.Index) : System.ReadOnlyMemory$1<number>
            public static AsMemory ($text: string, $start: number, $length: number) : System.ReadOnlyMemory$1<number>
            public static AsMemory ($text: string, $range: System.Range) : System.ReadOnlyMemory$1<number>
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class Memory$1<T> extends System.ValueType implements System.IEquatable$1<System.Memory$1<T>>
        {
        }
        class ReadOnlyMemory$1<T> extends System.ValueType implements System.IEquatable$1<System.ReadOnlyMemory$1<T>>
        {
        }
        class Range extends System.ValueType implements System.IEquatable$1<System.Range>
        {
            public get Start(): System.Index;
            public get End(): System.Index;
            public static get All(): System.Range;
            public Equals ($value: any) : boolean
            public Equals ($other: System.Range) : boolean
            public static StartAt ($start: System.Index) : System.Range
            public static EndAt ($end: System.Index) : System.Range
            public GetOffsetAndLength ($length: number) : System.ValueTuple$2<number, number>
            public constructor ($start: System.Index, $end: System.Index)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class ArraySegment$1<T> extends System.ValueType implements System.Collections.Generic.IList$1<T>, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>
        {
        }
        class MethodAccessException extends System.MemberAccessException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
        }
        class MissingFieldException extends System.MissingMemberException implements System.Runtime.Serialization.ISerializable
        {
            public get Message(): string;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($className: string, $fieldName: string)
            public constructor ($className: string, $memberName: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class MissingMethodException extends System.MissingMemberException implements System.Runtime.Serialization.ISerializable
        {
            public get Message(): string;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($className: string, $methodName: string)
            public constructor ($className: string, $memberName: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class MulticastNotSupportedException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class NonSerializedAttribute extends System.Attribute
        {
            public constructor ()
        }
        class NotFiniteNumberException extends System.ArithmeticException implements System.Runtime.Serialization.ISerializable
        {
            public get OffendingNumber(): number;
            public constructor ()
            public constructor ($offendingNumber: number)
            public constructor ($message: string)
            public constructor ($message: string, $offendingNumber: number)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($message: string, $offendingNumber: number, $innerException: System.Exception)
        }
        class NotImplementedException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class NotSupportedException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class Nullable extends System.Object
        {
            public static GetUnderlyingType ($nullableType: System.Type) : System.Type
        }
        class NullReferenceException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class ObjectDisposedException extends System.InvalidOperationException implements System.Runtime.Serialization.ISerializable
        {
            public get Message(): string;
            public get ObjectName(): string;
            public constructor ($objectName: string)
            public constructor ($objectName: string, $message: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ()
            public constructor ($message: string)
        }
        class ObsoleteAttribute extends System.Attribute
        {
            public get DiagnosticId(): string;
            public set DiagnosticId(value: string);
            public get UrlFormat(): string;
            public set UrlFormat(value: string);
            public get Message(): string;
            public get IsError(): boolean;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $error: boolean)
        }
        enum PlatformID
        { Win32S = 0, Win32Windows = 1, Win32NT = 2, WinCE = 3, Unix = 4, Xbox = 5, MacOSX = 6, Other = 7 }
        class OperationCanceledException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public get CancellationToken(): System.Threading.CancellationToken;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($token: System.Threading.CancellationToken)
            public constructor ($message: string, $token: System.Threading.CancellationToken)
            public constructor ($message: string, $innerException: System.Exception, $token: System.Threading.CancellationToken)
        }
        class OverflowException extends System.ArithmeticException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class ParamArrayAttribute extends System.Attribute
        {
            public constructor ()
        }
        class PlatformNotSupportedException extends System.NotSupportedException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class Random extends System.Object
        {
            public static get Shared(): System.Random;
            public Next () : number
            public Next ($maxValue: number) : number
            public Next ($minValue: number, $maxValue: number) : number
            public NextInt64 () : bigint
            public NextInt64 ($maxValue: bigint) : bigint
            public NextInt64 ($minValue: bigint, $maxValue: bigint) : bigint
            public NextSingle () : number
            public NextDouble () : number
            public NextBytes ($buffer: System.Array$1<number>) : void
            public NextBytes ($buffer: System.Span$1<number>) : void
            public constructor ()
            public constructor ($Seed: number)
        }
        class RankException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class SerializableAttribute extends System.Attribute
        {
            public constructor ()
        }
        class StackOverflowException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class StringComparer extends System.Object implements System.Collections.IComparer, System.Collections.IEqualityComparer, System.Collections.Generic.IComparer$1<string>, System.Collections.Generic.IEqualityComparer$1<string>
        {
            public static get InvariantCulture(): System.StringComparer;
            public static get InvariantCultureIgnoreCase(): System.StringComparer;
            public static get CurrentCulture(): System.StringComparer;
            public static get CurrentCultureIgnoreCase(): System.StringComparer;
            public static get Ordinal(): System.StringComparer;
            public static get OrdinalIgnoreCase(): System.StringComparer;
            public static FromComparison ($comparisonType: System.StringComparison) : System.StringComparer
            public static Create ($culture: System.Globalization.CultureInfo, $ignoreCase: boolean) : System.StringComparer
            public static Create ($culture: System.Globalization.CultureInfo, $options: System.Globalization.CompareOptions) : System.StringComparer
            public static IsWellKnownOrdinalComparer ($comparer: System.Collections.Generic.IEqualityComparer$1<string>, $ignoreCase: $Ref<boolean>) : boolean
            public static IsWellKnownCultureAwareComparer ($comparer: System.Collections.Generic.IEqualityComparer$1<string>, $compareInfo: $Ref<System.Globalization.CompareInfo>, $compareOptions: $Ref<System.Globalization.CompareOptions>) : boolean
            public Compare ($x: any, $y: any) : number
            public Equals ($x: any, $y: any) : boolean
            public GetHashCode ($obj: any) : number
            public Compare ($x: string, $y: string) : number
            public Equals ($x: string, $y: string) : boolean
            public GetHashCode ($obj: string) : number
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public GetHashCode () : number
        }
        class CultureAwareComparer extends System.StringComparer implements System.Collections.IComparer, System.Collections.IEqualityComparer, System.Collections.Generic.IComparer$1<string>, System.Collections.Generic.IEqualityComparer$1<string>, System.Runtime.Serialization.ISerializable
        {
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
        }
        class OrdinalComparer extends System.StringComparer implements System.Collections.IComparer, System.Collections.IEqualityComparer, System.Collections.Generic.IComparer$1<string>, System.Collections.Generic.IEqualityComparer$1<string>
        {
        }
        class StringNormalizationExtensions extends System.Object
        {
            public static IsNormalized ($strInput: string) : boolean
            public static IsNormalized ($strInput: string, $normalizationForm: System.Text.NormalizationForm) : boolean
            public static Normalize ($strInput: string) : string
            public static Normalize ($strInput: string, $normalizationForm: System.Text.NormalizationForm) : string
        }
        class STAThreadAttribute extends System.Attribute
        {
            public constructor ()
        }
        class MTAThreadAttribute extends System.Attribute
        {
            public constructor ()
        }
        class ThreadStaticAttribute extends System.Attribute
        {
            public constructor ()
        }
        class TimeoutException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class TimeZone extends System.Object
        {
            public static get CurrentTimeZone(): System.TimeZone;
            public get StandardName(): string;
            public get DaylightName(): string;
            public GetUtcOffset ($time: Date) : System.TimeSpan
            public ToUniversalTime ($time: Date) : Date
            public ToLocalTime ($time: Date) : Date
            public GetDaylightChanges ($year: number) : System.Globalization.DaylightTime
            public IsDaylightSavingTime ($time: Date) : boolean
            public static IsDaylightSavingTime ($time: Date, $daylightTimes: System.Globalization.DaylightTime) : boolean
        }
        class TimeZoneInfo extends System.Object implements System.IEquatable$1<System.TimeZoneInfo>, System.Runtime.Serialization.ISerializable, System.Runtime.Serialization.IDeserializationCallback
        {
            public get Id(): string;
            public get HasIanaId(): boolean;
            public get DisplayName(): string;
            public get StandardName(): string;
            public get DaylightName(): string;
            public get BaseUtcOffset(): System.TimeSpan;
            public get SupportsDaylightSavingTime(): boolean;
            public static get Local(): System.TimeZoneInfo;
            public static get Utc(): System.TimeZoneInfo;
            public GetAdjustmentRules () : System.Array$1<System.TimeZoneInfo.AdjustmentRule>
            public static FindSystemTimeZoneById ($id: string) : System.TimeZoneInfo
            public GetAmbiguousTimeOffsets ($dateTimeOffset: System.DateTimeOffset) : System.Array$1<System.TimeSpan>
            public GetAmbiguousTimeOffsets ($dateTime: Date) : System.Array$1<System.TimeSpan>
            public GetUtcOffset ($dateTimeOffset: System.DateTimeOffset) : System.TimeSpan
            public GetUtcOffset ($dateTime: Date) : System.TimeSpan
            public IsAmbiguousTime ($dateTimeOffset: System.DateTimeOffset) : boolean
            public IsAmbiguousTime ($dateTime: Date) : boolean
            public IsDaylightSavingTime ($dateTimeOffset: System.DateTimeOffset) : boolean
            public IsDaylightSavingTime ($dateTime: Date) : boolean
            public IsInvalidTime ($dateTime: Date) : boolean
            public static ClearCachedData () : void
            public static ConvertTimeBySystemTimeZoneId ($dateTimeOffset: System.DateTimeOffset, $destinationTimeZoneId: string) : System.DateTimeOffset
            public static ConvertTimeBySystemTimeZoneId ($dateTime: Date, $destinationTimeZoneId: string) : Date
            public static ConvertTimeBySystemTimeZoneId ($dateTime: Date, $sourceTimeZoneId: string, $destinationTimeZoneId: string) : Date
            public static ConvertTime ($dateTimeOffset: System.DateTimeOffset, $destinationTimeZone: System.TimeZoneInfo) : System.DateTimeOffset
            public static ConvertTime ($dateTime: Date, $destinationTimeZone: System.TimeZoneInfo) : Date
            public static ConvertTime ($dateTime: Date, $sourceTimeZone: System.TimeZoneInfo, $destinationTimeZone: System.TimeZoneInfo) : Date
            public static ConvertTimeFromUtc ($dateTime: Date, $destinationTimeZone: System.TimeZoneInfo) : Date
            public static ConvertTimeToUtc ($dateTime: Date) : Date
            public static ConvertTimeToUtc ($dateTime: Date, $sourceTimeZone: System.TimeZoneInfo) : Date
            public Equals ($other: System.TimeZoneInfo) : boolean
            public Equals ($obj: any) : boolean
            public static FromSerializedString ($source: string) : System.TimeZoneInfo
            public static GetSystemTimeZones () : System.Collections.ObjectModel.ReadOnlyCollection$1<System.TimeZoneInfo>
            public HasSameRules ($other: System.TimeZoneInfo) : boolean
            public ToSerializedString () : string
            public static CreateCustomTimeZone ($id: string, $baseUtcOffset: System.TimeSpan, $displayName: string, $standardDisplayName: string) : System.TimeZoneInfo
            public static CreateCustomTimeZone ($id: string, $baseUtcOffset: System.TimeSpan, $displayName: string, $standardDisplayName: string, $daylightDisplayName: string, $adjustmentRules: System.Array$1<System.TimeZoneInfo.AdjustmentRule>) : System.TimeZoneInfo
            public static CreateCustomTimeZone ($id: string, $baseUtcOffset: System.TimeSpan, $displayName: string, $standardDisplayName: string, $daylightDisplayName: string, $adjustmentRules: System.Array$1<System.TimeZoneInfo.AdjustmentRule>, $disableDaylightSavingTime: boolean) : System.TimeZoneInfo
            public static TryConvertIanaIdToWindowsId ($ianaId: string, $windowsId: $Ref<string>) : boolean
            public static TryConvertWindowsIdToIanaId ($windowsId: string, $ianaId: $Ref<string>) : boolean
            public static TryConvertWindowsIdToIanaId ($windowsId: string, $region: string, $ianaId: $Ref<string>) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class TimeZoneNotFoundException extends System.Exception implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class TupleExtensions extends System.Object
        {
        }
        class Tuple$3<T1, T2, T3> extends System.Object implements System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.ITupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        interface ITupleInternal extends System.Runtime.CompilerServices.ITuple
        {
        }
        class Tuple$8<T1, T2, T3, T4, T5, T6, T7, TRest> extends System.Object implements System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.ITupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        class ValueTuple$3<T1, T2, T3> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$3<T1, T2, T3>>, System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.IComparable$1<System.ValueTuple$3<T1, T2, T3>>, System.IValueTupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        class ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, TRest> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, TRest>>, System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.IComparable$1<System.ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, TRest>>, System.IValueTupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        class Tuple$4<T1, T2, T3, T4> extends System.Object implements System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.ITupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        class ValueTuple$4<T1, T2, T3, T4> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$4<T1, T2, T3, T4>>, System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.IComparable$1<System.ValueTuple$4<T1, T2, T3, T4>>, System.IValueTupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        class Tuple$5<T1, T2, T3, T4, T5> extends System.Object implements System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.ITupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        class ValueTuple$5<T1, T2, T3, T4, T5> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$5<T1, T2, T3, T4, T5>>, System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.IComparable$1<System.ValueTuple$5<T1, T2, T3, T4, T5>>, System.IValueTupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        class Tuple$6<T1, T2, T3, T4, T5, T6> extends System.Object implements System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.ITupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        class ValueTuple$6<T1, T2, T3, T4, T5, T6> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$6<T1, T2, T3, T4, T5, T6>>, System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.IComparable$1<System.ValueTuple$6<T1, T2, T3, T4, T5, T6>>, System.IValueTupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        class Tuple$7<T1, T2, T3, T4, T5, T6, T7> extends System.Object implements System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.ITupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        class ValueTuple$7<T1, T2, T3, T4, T5, T6, T7> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>>, System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.IComparable$1<System.ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>>, System.IValueTupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        class Tuple$1<T1> extends System.Object implements System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.ITupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        class ValueTuple$1<T1> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$1<T1>>, System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.IComparable$1<System.ValueTuple$1<T1>>, System.IValueTupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        class Tuple$2<T1, T2> extends System.Object implements System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.ITupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public CompareTo ($obj: any) : number
        }
        class TypeAccessException extends System.TypeLoadException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
        }
        class TypeInitializationException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public get TypeName(): string;
            public constructor ($fullTypeName: string, $innerException: System.Exception)
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class TypeUnloadedException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class UnauthorizedAccessException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class UnitySerializationHolder extends System.Object implements System.Runtime.Serialization.ISerializable, System.Runtime.Serialization.IObjectReference
        {
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public GetRealObject ($context: System.Runtime.Serialization.StreamingContext) : any
            public constructor ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext)
            public constructor ()
        }
        class ValueTuple extends System.ValueType implements System.IEquatable$1<System.ValueTuple>, System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.IComparable$1<System.ValueTuple>, System.IValueTupleInternal, System.Runtime.CompilerServices.ITuple
        {
            public Equals ($obj: any) : boolean
            public Equals ($other: System.ValueTuple) : boolean
            public CompareTo ($other: System.ValueTuple) : number
            public static Create () : System.ValueTuple
            public CompareTo ($obj: any) : number
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class SequencePosition extends System.ValueType implements System.IEquatable$1<System.SequencePosition>
        {
            public GetObject () : any
            public GetInteger () : number
            public Equals ($other: System.SequencePosition) : boolean
            public Equals ($obj: any) : boolean
            public constructor ($object: any, $integer: number)
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class Console extends System.Object
        {
            public static get In(): System.IO.TextReader;
            public static get InputEncoding(): System.Text.Encoding;
            public static set InputEncoding(value: System.Text.Encoding);
            public static get OutputEncoding(): System.Text.Encoding;
            public static set OutputEncoding(value: System.Text.Encoding);
            public static get KeyAvailable(): boolean;
            public static get Out(): System.IO.TextWriter;
            public static get Error(): System.IO.TextWriter;
            public static get IsInputRedirected(): boolean;
            public static get IsOutputRedirected(): boolean;
            public static get IsErrorRedirected(): boolean;
            public static get CursorSize(): number;
            public static set CursorSize(value: number);
            public static get NumberLock(): boolean;
            public static get CapsLock(): boolean;
            public static get BackgroundColor(): System.ConsoleColor;
            public static set BackgroundColor(value: System.ConsoleColor);
            public static get ForegroundColor(): System.ConsoleColor;
            public static set ForegroundColor(value: System.ConsoleColor);
            public static get BufferWidth(): number;
            public static set BufferWidth(value: number);
            public static get BufferHeight(): number;
            public static set BufferHeight(value: number);
            public static get WindowLeft(): number;
            public static set WindowLeft(value: number);
            public static get WindowTop(): number;
            public static set WindowTop(value: number);
            public static get WindowWidth(): number;
            public static set WindowWidth(value: number);
            public static get WindowHeight(): number;
            public static set WindowHeight(value: number);
            public static get LargestWindowWidth(): number;
            public static get LargestWindowHeight(): number;
            public static get CursorVisible(): boolean;
            public static set CursorVisible(value: boolean);
            public static get CursorLeft(): number;
            public static set CursorLeft(value: number);
            public static get CursorTop(): number;
            public static set CursorTop(value: number);
            public static get Title(): string;
            public static set Title(value: string);
            public static get TreatControlCAsInput(): boolean;
            public static set TreatControlCAsInput(value: boolean);
            public static WriteLine ($format: string, $arg0: any) : void
            public static WriteLine ($format: string, $arg0: any, $arg1: any) : void
            public static WriteLine ($format: string, $arg0: any, $arg1: any, $arg2: any) : void
            public static WriteLine ($format: string, ...arg: any[]) : void
            public static Write ($format: string, $arg0: any) : void
            public static Write ($format: string, $arg0: any, $arg1: any) : void
            public static Write ($format: string, $arg0: any, $arg1: any, $arg2: any) : void
            public static Write ($format: string, ...arg: any[]) : void
            public static Write ($value: boolean) : void
            public static Write ($value: number) : void
            public static Write ($buffer: System.Array$1<number>) : void
            public static Write ($buffer: System.Array$1<number>, $index: number, $count: number) : void
            public static Write ($value: System.Decimal) : void
            public static Write ($value: bigint) : void
            public static Write ($value: any) : void
            public static Write ($value: string) : void
            public static ReadKey () : System.ConsoleKeyInfo
            public static ReadKey ($intercept: boolean) : System.ConsoleKeyInfo
            public static ResetColor () : void
            public static SetBufferSize ($width: number, $height: number) : void
            public static SetWindowPosition ($left: number, $top: number) : void
            public static SetWindowSize ($width: number, $height: number) : void
            public static GetCursorPosition () : System.ValueTuple$2<number, number>
            public static Beep () : void
            public static Beep ($frequency: number, $duration: number) : void
            public static MoveBufferArea ($sourceLeft: number, $sourceTop: number, $sourceWidth: number, $sourceHeight: number, $targetLeft: number, $targetTop: number) : void
            public static MoveBufferArea ($sourceLeft: number, $sourceTop: number, $sourceWidth: number, $sourceHeight: number, $targetLeft: number, $targetTop: number, $sourceChar: number, $sourceForeColor: System.ConsoleColor, $sourceBackColor: System.ConsoleColor) : void
            public static Clear () : void
            public static SetCursorPosition ($left: number, $top: number) : void
            public static add_CancelKeyPress ($value: System.ConsoleCancelEventHandler) : void
            public static remove_CancelKeyPress ($value: System.ConsoleCancelEventHandler) : void
            public static OpenStandardInput () : System.IO.Stream
            public static OpenStandardInput ($bufferSize: number) : System.IO.Stream
            public static OpenStandardOutput () : System.IO.Stream
            public static OpenStandardOutput ($bufferSize: number) : System.IO.Stream
            public static OpenStandardError () : System.IO.Stream
            public static OpenStandardError ($bufferSize: number) : System.IO.Stream
            public static SetIn ($newIn: System.IO.TextReader) : void
            public static SetOut ($newOut: System.IO.TextWriter) : void
            public static SetError ($newError: System.IO.TextWriter) : void
            public static Read () : number
            public static ReadLine () : string
            public static WriteLine () : void
            public static WriteLine ($value: boolean) : void
            public static WriteLine ($value: number) : void
            public static WriteLine ($buffer: System.Array$1<number>) : void
            public static WriteLine ($buffer: System.Array$1<number>, $index: number, $count: number) : void
            public static WriteLine ($value: System.Decimal) : void
            public static WriteLine ($value: bigint) : void
            public static WriteLine ($value: any) : void
            public static WriteLine ($value: string) : void
        }
        class ConsoleKeyInfo extends System.ValueType implements System.IEquatable$1<System.ConsoleKeyInfo>
        {
            public get KeyChar(): number;
            public get Key(): System.ConsoleKey;
            public get Modifiers(): System.ConsoleModifiers;
            public Equals ($value: any) : boolean
            public Equals ($obj: System.ConsoleKeyInfo) : boolean
            public static op_Equality ($a: System.ConsoleKeyInfo, $b: System.ConsoleKeyInfo) : boolean
            public static op_Inequality ($a: System.ConsoleKeyInfo, $b: System.ConsoleKeyInfo) : boolean
            public constructor ($keyChar: number, $key: System.ConsoleKey, $shift: boolean, $alt: boolean, $control: boolean)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        enum ConsoleColor
        { Black = 0, DarkBlue = 1, DarkGreen = 2, DarkCyan = 3, DarkRed = 4, DarkMagenta = 5, DarkYellow = 6, Gray = 7, DarkGray = 8, Blue = 9, Green = 10, Cyan = 11, Red = 12, Magenta = 13, Yellow = 14, White = 15 }
        interface ConsoleCancelEventHandler
        { (sender: any, e: System.ConsoleCancelEventArgs) : void; }
        var ConsoleCancelEventHandler: { new (func: (sender: any, e: System.ConsoleCancelEventArgs) => void): ConsoleCancelEventHandler; }
        class ConsoleCancelEventArgs extends System.EventArgs
        {
            public get Cancel(): boolean;
            public set Cancel(value: boolean);
            public get SpecialKey(): System.ConsoleSpecialKey;
        }
        enum ConsoleSpecialKey
        { ControlC = 0, ControlBreak = 1 }
        enum ConsoleKey
        { Backspace = 8, Tab = 9, Clear = 12, Enter = 13, Pause = 19, Escape = 27, Spacebar = 32, PageUp = 33, PageDown = 34, End = 35, Home = 36, LeftArrow = 37, UpArrow = 38, RightArrow = 39, DownArrow = 40, Select = 41, Print = 42, Execute = 43, PrintScreen = 44, Insert = 45, Delete = 46, Help = 47, D0 = 48, D1 = 49, D2 = 50, D3 = 51, D4 = 52, D5 = 53, D6 = 54, D7 = 55, D8 = 56, D9 = 57, A = 65, B = 66, C = 67, D = 68, E = 69, F = 70, G = 71, H = 72, I = 73, J = 74, K = 75, L = 76, M = 77, N = 78, O = 79, P = 80, Q = 81, R = 82, S = 83, T = 84, U = 85, V = 86, W = 87, X = 88, Y = 89, Z = 90, LeftWindows = 91, RightWindows = 92, Applications = 93, Sleep = 95, NumPad0 = 96, NumPad1 = 97, NumPad2 = 98, NumPad3 = 99, NumPad4 = 100, NumPad5 = 101, NumPad6 = 102, NumPad7 = 103, NumPad8 = 104, NumPad9 = 105, Multiply = 106, Add = 107, Separator = 108, Subtract = 109, Decimal = 110, Divide = 111, F1 = 112, F2 = 113, F3 = 114, F4 = 115, F5 = 116, F6 = 117, F7 = 118, F8 = 119, F9 = 120, F10 = 121, F11 = 122, F12 = 123, F13 = 124, F14 = 125, F15 = 126, F16 = 127, F17 = 128, F18 = 129, F19 = 130, F20 = 131, F21 = 132, F22 = 133, F23 = 134, F24 = 135, BrowserBack = 166, BrowserForward = 167, BrowserRefresh = 168, BrowserStop = 169, BrowserSearch = 170, BrowserFavorites = 171, BrowserHome = 172, VolumeMute = 173, VolumeDown = 174, VolumeUp = 175, MediaNext = 176, MediaPrevious = 177, MediaStop = 178, MediaPlay = 179, LaunchMail = 180, LaunchMediaSelect = 181, LaunchApp1 = 182, LaunchApp2 = 183, Oem1 = 186, OemPlus = 187, OemComma = 188, OemMinus = 189, OemPeriod = 190, Oem2 = 191, Oem3 = 192, Oem4 = 219, Oem5 = 220, Oem6 = 221, Oem7 = 222, Oem8 = 223, Oem102 = 226, Process = 229, Packet = 231, Attention = 246, CrSel = 247, ExSel = 248, EraseEndOfFile = 249, Play = 250, Zoom = 251, NoName = 252, Pa1 = 253, OemClear = 254 }
        enum ConsoleModifiers
        { Alt = 1, Shift = 2, Control = 4 }
        interface IServiceProvider
        {
            GetService ($serviceType: System.Type) : any
        }
        class UriTypeConverter extends System.ComponentModel.TypeConverter
        {
            public constructor ()
        }
        interface Func$1<TResult>
        { () : TResult; }
    }
    namespace System.Collections {
        interface IList extends System.Collections.ICollection, System.Collections.IEnumerable
        {
        }
        interface ICollection extends System.Collections.IEnumerable
        {
        }
        interface IEnumerable
        {
        }
        interface IStructuralComparable
        {
        }
        interface IStructuralEquatable
        {
        }
        interface IComparer
        {
        }
        interface IEnumerator
        {
        }
        interface IDictionary extends System.Collections.ICollection, System.Collections.IEnumerable
        {
        }
        interface IEqualityComparer
        {
        }
        class Hashtable extends System.Object implements System.Collections.IDictionary, System.Collections.ICollection, System.Collections.IEnumerable, System.Runtime.Serialization.ISerializable, System.Runtime.Serialization.IDeserializationCallback, System.ICloneable
        {
            public Clone () : any
        }
        class ArrayList extends System.Object implements System.Collections.IList, System.Collections.ICollection, System.Collections.IEnumerable, System.ICloneable
        {
            public Clone () : any
        }
    }
    namespace System.Collections.Generic {
        interface IList$1<T> extends System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        interface ICollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        interface IEnumerable$1<T> extends System.Collections.IEnumerable
        {
        }
        interface IReadOnlyList$1<T> extends System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        interface IReadOnlyCollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        interface IComparer$1<T>
        {
        }
        interface IEnumerator$1<T> extends System.IDisposable, System.Collections.IEnumerator
        {
            Dispose () : void
        }
        interface IEqualityComparer$1<T>
        {
        }
        class List$1<T> extends System.Object implements System.Collections.Generic.IList$1<T>, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.IList, System.Collections.ICollection, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>
        {
        }
    }
    namespace System.Runtime.Serialization {
        interface ISerializable
        {
        }
        interface IObjectReference
        {
        }
        class SerializationInfo extends System.Object
        {
        }
        class StreamingContext extends System.ValueType
        {
        }
        interface IDeserializationCallback
        {
        }
    }
    namespace System.Reflection {
        class MemberInfo extends System.Object implements System.Reflection.ICustomAttributeProvider
        {
        }
        interface ICustomAttributeProvider
        {
        }
        interface IReflect
        {
        }
        class ParameterInfo extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.IObjectReference
        {
        }
        class Module extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.ISerializable
        {
        }
        class Assembly extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.ISerializable
        {
        }
        class MethodInfo extends System.Reflection.MethodBase implements System.Reflection.ICustomAttributeProvider
        {
        }
        class MethodBase extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider
        {
        }
        interface MemberFilter
        { (m: System.Reflection.MemberInfo, filterCriteria: any) : boolean; }
        var MemberFilter: { new (func: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean): MemberFilter; }
        class FieldInfo extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider
        {
        }
        enum BindingFlags
        { Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216, DoNotWrapExceptions = 33554432 }
        enum MemberTypes
        { Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
        class ParameterModifier extends System.ValueType
        {
        }
        class Binder extends System.Object
        {
        }
        enum CallingConventions
        { Standard = 1, VarArgs = 2, Any = 3, HasThis = 32, ExplicitThis = 64 }
        class PropertyInfo extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider
        {
        }
        class InterfaceMapping extends System.ValueType
        {
        }
        interface TypeFilter
        { (m: System.Type, filterCriteria: any) : boolean; }
        var TypeFilter: { new (func: (m: System.Type, filterCriteria: any) => boolean): TypeFilter; }
        class AssemblyName extends System.Object implements System.ICloneable, System.Runtime.Serialization.IDeserializationCallback, System.Runtime.Serialization.ISerializable
        {
            public Clone () : any
        }
        enum GenericParameterAttributes
        { None = 0, VarianceMask = 3, Covariant = 1, Contravariant = 2, SpecialConstraintMask = 28, ReferenceTypeConstraint = 4, NotNullableValueTypeConstraint = 8, DefaultConstructorConstraint = 16 }
        enum TypeAttributes
        { VisibilityMask = 7, NotPublic = 0, Public = 1, NestedPublic = 2, NestedPrivate = 3, NestedFamily = 4, NestedAssembly = 5, NestedFamANDAssem = 6, NestedFamORAssem = 7, LayoutMask = 24, AutoLayout = 0, SequentialLayout = 8, ExplicitLayout = 16, ClassSemanticsMask = 32, Class = 0, Interface = 32, Abstract = 128, Sealed = 256, SpecialName = 1024, Import = 4096, Serializable = 8192, WindowsRuntime = 16384, StringFormatMask = 196608, AnsiClass = 0, UnicodeClass = 65536, AutoClass = 131072, CustomFormatClass = 196608, CustomFormatMask = 12582912, BeforeFieldInit = 1048576, RTSpecialName = 2048, HasSecurity = 262144, ReservedMask = 264192 }
        class ConstructorInfo extends System.Reflection.MethodBase implements System.Reflection.ICustomAttributeProvider
        {
        }
        class EventInfo extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider
        {
        }
    }
    namespace System.Collections.ObjectModel {
        class ReadOnlyCollection$1<T> extends System.Object implements System.Collections.Generic.IList$1<T>, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.IList, System.Collections.ICollection, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>
        {
        }
    }
    namespace System.Globalization {
        enum NumberStyles
        { None = 0, AllowLeadingWhite = 1, AllowTrailingWhite = 2, AllowLeadingSign = 4, AllowTrailingSign = 8, AllowParentheses = 16, AllowDecimalPoint = 32, AllowThousands = 64, AllowExponent = 128, AllowCurrencySymbol = 256, AllowHexSpecifier = 512, Integer = 7, HexNumber = 515, Number = 111, Float = 167, Currency = 383, Any = 511 }
        class CultureInfo extends System.Object implements System.IFormatProvider, System.ICloneable
        {
            public GetFormat ($formatType: System.Type) : any
            public Clone () : any
        }
        enum CompareOptions
        { None = 0, IgnoreCase = 1, IgnoreNonSpace = 2, IgnoreSymbols = 4, IgnoreKanaType = 8, IgnoreWidth = 16, OrdinalIgnoreCase = 268435456, StringSort = 536870912, Ordinal = 1073741824 }
        enum UnicodeCategory
        { UppercaseLetter = 0, LowercaseLetter = 1, TitlecaseLetter = 2, ModifierLetter = 3, OtherLetter = 4, NonSpacingMark = 5, SpacingCombiningMark = 6, EnclosingMark = 7, DecimalDigitNumber = 8, LetterNumber = 9, OtherNumber = 10, SpaceSeparator = 11, LineSeparator = 12, ParagraphSeparator = 13, Control = 14, Format = 15, Surrogate = 16, PrivateUse = 17, ConnectorPunctuation = 18, DashPunctuation = 19, OpenPunctuation = 20, ClosePunctuation = 21, InitialQuotePunctuation = 22, FinalQuotePunctuation = 23, OtherPunctuation = 24, MathSymbol = 25, CurrencySymbol = 26, ModifierSymbol = 27, OtherSymbol = 28, OtherNotAssigned = 29 }
        enum DateTimeStyles
        { None = 0, AllowLeadingWhite = 1, AllowTrailingWhite = 2, AllowInnerWhite = 4, AllowWhiteSpaces = 7, NoCurrentDateDefault = 8, AdjustToUniversal = 16, AssumeLocal = 32, AssumeUniversal = 64, RoundtripKind = 128 }
        class Calendar extends System.Object implements System.ICloneable
        {
            public Clone () : any
        }
        class CompareInfo extends System.Object implements System.Runtime.Serialization.IDeserializationCallback
        {
        }
        enum TimeSpanStyles
        { None = 0, AssumeNegative = 1 }
        class DaylightTime extends System.Object
        {
        }
    }
    namespace System.Environment {
        enum SpecialFolder
        { ApplicationData = 26, CommonApplicationData = 35, LocalApplicationData = 28, Cookies = 33, Desktop = 0, Favorites = 6, History = 34, InternetCache = 32, Programs = 2, MyComputer = 17, MyMusic = 13, MyPictures = 39, MyVideos = 14, Recent = 8, SendTo = 9, StartMenu = 11, Startup = 7, System = 37, Templates = 21, DesktopDirectory = 16, Personal = 5, MyDocuments = 5, ProgramFiles = 38, CommonProgramFiles = 43, AdminTools = 48, CDBurning = 59, CommonAdminTools = 47, CommonDocuments = 46, CommonMusic = 53, CommonOemLinks = 58, CommonPictures = 54, CommonStartMenu = 22, CommonPrograms = 23, CommonStartup = 24, CommonDesktopDirectory = 25, CommonTemplates = 45, CommonVideos = 55, Fonts = 20, NetworkShortcuts = 19, PrinterShortcuts = 27, UserProfile = 40, CommonProgramFilesX86 = 44, ProgramFilesX86 = 42, Resources = 56, LocalizedResources = 57, SystemX86 = 41, Windows = 36 }
        enum SpecialFolderOption
        { None = 0, Create = 32768, DoNotVerify = 16384 }
    }
    namespace System.Runtime.CompilerServices {
        interface ITuple
        {
        }
        class DefaultInterpolatedStringHandler extends System.ValueType
        {
        }
    }
    namespace System.Text {
        class StringRuneEnumerator extends System.ValueType implements System.Collections.Generic.IEnumerable$1<System.Text.Rune>, System.Collections.IEnumerable, System.Collections.Generic.IEnumerator$1<System.Text.Rune>, System.IDisposable, System.Collections.IEnumerator
        {
            public Dispose () : void
        }
        class Rune extends System.ValueType implements System.IComparable, System.IComparable$1<System.Text.Rune>, System.IEquatable$1<System.Text.Rune>, System.ISpanFormattable, System.IFormattable
        {
            public CompareTo ($obj: any) : number
            public TryFormat ($destination: System.Span$1<number>, $charsWritten: $Ref<number>, $format: System.ReadOnlySpan$1<number>, $provider: System.IFormatProvider) : boolean
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public ToString () : string
        }
        enum NormalizationForm
        { FormC = 1, FormD = 2, FormKC = 5, FormKD = 6 }
        class Encoding extends System.Object implements System.ICloneable
        {
            public Clone () : any
        }
        class SpanRuneEnumerator extends System.ValueType
        {
        }
        class SpanLineEnumerator extends System.ValueType
        {
        }
        class StringBuilder extends System.Object implements System.Runtime.Serialization.ISerializable
        {
        }
    }
    namespace System.Buffers {
        interface SpanAction$2<T, TArg>
        { (span: System.Span$1<T>, arg: TArg) : void; }
    }
    namespace System.Runtime.InteropServices {
        class StructLayoutAttribute extends System.Attribute
        {
        }
        class SafeHandle extends System.Runtime.ConstrainedExecution.CriticalFinalizerObject implements System.IDisposable
        {
            public Dispose () : void
        }
        class SafeBuffer extends Microsoft.Win32.SafeHandles.SafeHandleZeroOrMinusOneIsInvalid implements System.IDisposable
        {
        }
    }
    namespace System.Runtime.Remoting {
        class ObjectHandle extends System.MarshalByRefObject
        {
        }
    }
    namespace System.Runtime.ExceptionServices {
        class FirstChanceExceptionEventArgs extends System.EventArgs
        {
        }
    }
    namespace System.Security {
        class PermissionSet extends System.Object implements System.Collections.ICollection, System.Collections.IEnumerable, System.Runtime.Serialization.IDeserializationCallback, System.Security.ISecurityEncodable, System.Security.IStackWalk
        {
            public get Count(): number;
            public get IsReadOnly(): boolean;
            public get IsSynchronized(): boolean;
            public get SyncRoot(): any;
            public AddPermission ($perm: System.Security.IPermission) : System.Security.IPermission
            public Assert () : void
            public ContainsNonCodeAccessPermissions () : boolean
            public Copy () : System.Security.PermissionSet
            public CopyTo ($array: System.Array, $index: number) : void
            public Demand () : void
            public FromXml ($et: System.Security.SecurityElement) : void
            public GetEnumerator () : System.Collections.IEnumerator
            public GetPermission ($permClass: System.Type) : System.Security.IPermission
            public Intersect ($other: System.Security.PermissionSet) : System.Security.PermissionSet
            public IsEmpty () : boolean
            public IsSubsetOf ($target: System.Security.PermissionSet) : boolean
            public IsUnrestricted () : boolean
            public PermitOnly () : void
            public RemovePermission ($permClass: System.Type) : System.Security.IPermission
            public static RevertAssert () : void
            public SetPermission ($perm: System.Security.IPermission) : System.Security.IPermission
            public ToXml () : System.Security.SecurityElement
            public Union ($other: System.Security.PermissionSet) : System.Security.PermissionSet
            public constructor ($state: System.Security.Permissions.PermissionState)
            public constructor ($permSet: System.Security.PermissionSet)
            public FromXml ($e: System.Security.SecurityElement) : void
            public Deny () : void
            public constructor ()
        }
        interface ISecurityEncodable
        {
            FromXml ($e: System.Security.SecurityElement) : void
            ToXml () : System.Security.SecurityElement
        }
        interface IStackWalk
        {
            Assert () : void
            Demand () : void
            Deny () : void
            PermitOnly () : void
        }
        class AllowPartiallyTrustedCallersAttribute extends System.Attribute
        {
            public get PartialTrustVisibilityLevel(): System.Security.PartialTrustVisibilityLevel;
            public set PartialTrustVisibilityLevel(value: System.Security.PartialTrustVisibilityLevel);
            public constructor ()
        }
        enum PartialTrustVisibilityLevel
        { VisibleToAllHosts = 0, NotVisibleByDefault = 1 }
        interface IPermission extends System.Security.ISecurityEncodable
        {
            Copy () : System.Security.IPermission
            Demand () : void
            Intersect ($target: System.Security.IPermission) : System.Security.IPermission
            IsSubsetOf ($target: System.Security.IPermission) : boolean
            Union ($target: System.Security.IPermission) : System.Security.IPermission
            FromXml ($e: System.Security.SecurityElement) : void
            ToXml () : System.Security.SecurityElement
        }
        class SecurityElement extends System.Object
        {
            public get Tag(): string;
            public set Tag(value: string);
            public get Attributes(): System.Collections.Hashtable;
            public set Attributes(value: System.Collections.Hashtable);
            public get Text(): string;
            public set Text(value: string);
            public get Children(): System.Collections.ArrayList;
            public set Children(value: System.Collections.ArrayList);
            public AddAttribute ($name: string, $value: string) : void
            public AddChild ($child: System.Security.SecurityElement) : void
            public Equal ($other: System.Security.SecurityElement) : boolean
            public Copy () : System.Security.SecurityElement
            public static IsValidTag ($tag: string) : boolean
            public static IsValidText ($text: string) : boolean
            public static IsValidAttributeName ($name: string) : boolean
            public static IsValidAttributeValue ($value: string) : boolean
            public static Escape ($str: string) : string
            public Attribute ($name: string) : string
            public SearchForChildByTag ($tag: string) : System.Security.SecurityElement
            public SearchForTextOfTag ($tag: string) : string
            public static FromString ($xml: string) : System.Security.SecurityElement
            public constructor ($tag: string)
            public constructor ($tag: string, $text: string)
            public constructor ()
        }
        class SecureString extends System.Object implements System.IDisposable
        {
            public get Length(): number;
            public AppendChar ($c: number) : void
            public Clear () : void
            public Copy () : System.Security.SecureString
            public Dispose () : void
            public InsertAt ($index: number, $c: number) : void
            public IsReadOnly () : boolean
            public MakeReadOnly () : void
            public RemoveAt ($index: number) : void
            public SetAt ($index: number, $c: number) : void
            public constructor ()
        }
        class SecurityCriticalAttribute extends System.Attribute
        {
            public constructor ()
            public constructor ($scope: System.Security.SecurityCriticalScope)
        }
        enum SecurityCriticalScope
        { Explicit = 0, Everything = 1 }
        class SecurityException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public get Demanded(): any;
            public set Demanded(value: any);
            public get DenySetInstance(): any;
            public set DenySetInstance(value: any);
            public get FailedAssemblyInfo(): System.Reflection.AssemblyName;
            public set FailedAssemblyInfo(value: System.Reflection.AssemblyName);
            public get GrantedSet(): string;
            public set GrantedSet(value: string);
            public get Method(): System.Reflection.MethodInfo;
            public set Method(value: System.Reflection.MethodInfo);
            public get PermissionState(): string;
            public set PermissionState(value: string);
            public get PermissionType(): System.Type;
            public set PermissionType(value: System.Type);
            public get PermitOnlySetInstance(): any;
            public set PermitOnlySetInstance(value: any);
            public get RefusedSet(): string;
            public set RefusedSet(value: string);
            public get Url(): string;
            public set Url(value: string);
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $type: System.Type)
            public constructor ($message: string, $type: System.Type, $state: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class SecurityRulesAttribute extends System.Attribute
        {
            public get SkipVerificationInFullTrust(): boolean;
            public set SkipVerificationInFullTrust(value: boolean);
            public get RuleSet(): System.Security.SecurityRuleSet;
            public constructor ($ruleSet: System.Security.SecurityRuleSet)
            public constructor ()
        }
        enum SecurityRuleSet
        { None = 0, Level1 = 1, Level2 = 2 }
        class SecuritySafeCriticalAttribute extends System.Attribute
        {
            public constructor ()
        }
        class SecurityTransparentAttribute extends System.Attribute
        {
            public constructor ()
        }
        class SecurityTreatAsSafeAttribute extends System.Attribute
        {
            public constructor ()
        }
        class SuppressUnmanagedCodeSecurityAttribute extends System.Attribute
        {
            public constructor ()
        }
        class UnverifiableCodeAttribute extends System.Attribute
        {
            public constructor ()
        }
        class VerificationException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class SecureStringMarshal extends System.Object
        {
            public static SecureStringToCoTaskMemAnsi ($s: System.Security.SecureString) : System.IntPtr
            public static SecureStringToGlobalAllocAnsi ($s: System.Security.SecureString) : System.IntPtr
            public static SecureStringToCoTaskMemUnicode ($s: System.Security.SecureString) : System.IntPtr
            public static SecureStringToGlobalAllocUnicode ($s: System.Security.SecureString) : System.IntPtr
        }
    }
    namespace System.Configuration.Assemblies {
        enum AssemblyHashAlgorithm
        { None = 0, MD5 = 32771, SHA1 = 32772, SHA256 = 32780, SHA384 = 32781, SHA512 = 32782 }
    }
    namespace System.Security.Principal {
        enum PrincipalPolicy
        { UnauthenticatedPrincipal = 0, NoPrincipal = 1, WindowsPrincipal = 2 }
        interface IPrincipal
        {
        }
    }
    namespace System.Threading.Tasks {
        class ValueTask extends System.ValueType implements System.IEquatable$1<System.Threading.Tasks.ValueTask>
        {
        }
        class Task$1<TResult> extends System.Threading.Tasks.Task implements System.IAsyncResult, System.IDisposable
        {
        }
        class Task extends System.Object implements System.IAsyncResult, System.IDisposable
        {
            public get IsCompleted(): boolean;
            public get AsyncWaitHandle(): System.Threading.WaitHandle;
            public get AsyncState(): any;
            public get CompletedSynchronously(): boolean;
            public Dispose () : void
        }
        class ValueTask$1<TResult> extends System.ValueType implements System.IEquatable$1<System.Threading.Tasks.ValueTask$1<TResult>>
        {
        }
    }
    namespace System.Threading {
        class WaitHandle extends System.MarshalByRefObject implements System.IDisposable
        {
            public Dispose () : void
        }
        class CancellationToken extends System.ValueType
        {
        }
    }
    namespace System.MemoryExtensions {
        class TryWriteInterpolatedStringHandler extends System.ValueType
        {
            public AppendLiteral ($value: string) : boolean
            public AppendFormatted ($value: System.ReadOnlySpan$1<number>) : boolean
            public AppendFormatted ($value: System.ReadOnlySpan$1<number>, $alignment?: number, $format?: string) : boolean
            public AppendFormatted ($value: string) : boolean
            public AppendFormatted ($value: string, $alignment?: number, $format?: string) : boolean
            public AppendFormatted ($value: any, $alignment?: number, $format?: string) : boolean
            public constructor ($literalLength: number, $formattedCount: number, $destination: System.Span$1<number>, $shouldAppend: $Ref<boolean>)
            public constructor ($literalLength: number, $formattedCount: number, $destination: System.Span$1<number>, $provider: System.IFormatProvider, $shouldAppend: $Ref<boolean>)
            public constructor ()
        }
    }
    namespace System.TimeZoneInfo {
        class AdjustmentRule extends System.Object implements System.IEquatable$1<System.TimeZoneInfo.AdjustmentRule>, System.Runtime.Serialization.ISerializable, System.Runtime.Serialization.IDeserializationCallback
        {
            public get DateStart(): Date;
            public get DateEnd(): Date;
            public get DaylightDelta(): System.TimeSpan;
            public get DaylightTransitionStart(): System.TimeZoneInfo.TransitionTime;
            public get DaylightTransitionEnd(): System.TimeZoneInfo.TransitionTime;
            public get BaseUtcOffsetDelta(): System.TimeSpan;
            public Equals ($other: System.TimeZoneInfo.AdjustmentRule) : boolean
            public static CreateAdjustmentRule ($dateStart: Date, $dateEnd: Date, $daylightDelta: System.TimeSpan, $daylightTransitionStart: System.TimeZoneInfo.TransitionTime, $daylightTransitionEnd: System.TimeZoneInfo.TransitionTime, $baseUtcOffsetDelta: System.TimeSpan) : System.TimeZoneInfo.AdjustmentRule
            public static CreateAdjustmentRule ($dateStart: Date, $dateEnd: Date, $daylightDelta: System.TimeSpan, $daylightTransitionStart: System.TimeZoneInfo.TransitionTime, $daylightTransitionEnd: System.TimeZoneInfo.TransitionTime) : System.TimeZoneInfo.AdjustmentRule
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class TransitionTime extends System.ValueType implements System.IEquatable$1<System.TimeZoneInfo.TransitionTime>, System.Runtime.Serialization.ISerializable, System.Runtime.Serialization.IDeserializationCallback
        {
            public get TimeOfDay(): Date;
            public get Month(): number;
            public get Week(): number;
            public get Day(): number;
            public get DayOfWeek(): System.DayOfWeek;
            public get IsFixedDateRule(): boolean;
            public Equals ($obj: any) : boolean
            public static op_Equality ($t1: System.TimeZoneInfo.TransitionTime, $t2: System.TimeZoneInfo.TransitionTime) : boolean
            public static op_Inequality ($t1: System.TimeZoneInfo.TransitionTime, $t2: System.TimeZoneInfo.TransitionTime) : boolean
            public Equals ($other: System.TimeZoneInfo.TransitionTime) : boolean
            public static CreateFixedDateRule ($timeOfDay: Date, $month: number, $day: number) : System.TimeZoneInfo.TransitionTime
            public static CreateFloatingDateRule ($timeOfDay: Date, $month: number, $week: number, $dayOfWeek: System.DayOfWeek) : System.TimeZoneInfo.TransitionTime
            public static Equals ($objA: any, $objB: any) : boolean
        }
    }
    namespace System.Security.Permissions {
        enum PermissionState
        { None = 0, Unrestricted = 1 }
    }
    namespace System.IO {
        class FileLoadException extends System.IO.IOException implements System.Runtime.Serialization.ISerializable
        {
            public get Message(): string;
            public get FileName(): string;
            public get FusionLog(): string;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $inner: System.Exception)
            public constructor ($message: string, $fileName: string)
            public constructor ($message: string, $fileName: string, $inner: System.Exception)
            public constructor ($message: string, $hresult: number)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class IOException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $hresult: number)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class FileNotFoundException extends System.IO.IOException implements System.Runtime.Serialization.ISerializable
        {
            public get Message(): string;
            public get FileName(): string;
            public get FusionLog(): string;
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
            public constructor ($message: string, $fileName: string)
            public constructor ($message: string, $fileName: string, $innerException: System.Exception)
            public constructor ($message: string, $hresult: number)
        }
        class BinaryReader extends System.Object implements System.IDisposable
        {
            public get BaseStream(): System.IO.Stream;
            public Dispose () : void
            public Close () : void
            public PeekChar () : number
            public Read () : number
            public ReadByte () : number
            public ReadSByte () : number
            public ReadBoolean () : boolean
            public ReadChar () : number
            public ReadInt16 () : number
            public ReadUInt16 () : number
            public ReadInt32 () : number
            public ReadUInt32 () : number
            public ReadInt64 () : bigint
            public ReadUInt64 () : bigint
            public ReadHalf () : System.Half
            public ReadSingle () : number
            public ReadDouble () : number
            public ReadDecimal () : System.Decimal
            public ReadString () : string
            public Read ($buffer: System.Array$1<number>, $index: number, $count: number) : number
            public Read ($buffer: System.Span$1<number>) : number
            public ReadChars ($count: number) : System.Array$1<number>
            public ReadBytes ($count: number) : System.Array$1<number>
            public Read7BitEncodedInt () : number
            public Read7BitEncodedInt64 () : bigint
            public constructor ($input: System.IO.Stream)
            public constructor ($input: System.IO.Stream, $encoding: System.Text.Encoding)
            public constructor ($input: System.IO.Stream, $encoding: System.Text.Encoding, $leaveOpen: boolean)
            public constructor ()
        }
        class Stream extends System.MarshalByRefObject implements System.IDisposable, System.IAsyncDisposable
        {
            public Dispose () : void
            public DisposeAsync () : System.Threading.Tasks.ValueTask
        }
        class BinaryWriter extends System.Object implements System.IDisposable, System.IAsyncDisposable
        {
            public static Null : System.IO.BinaryWriter
            public get BaseStream(): System.IO.Stream;
            public Close () : void
            public Dispose () : void
            public DisposeAsync () : System.Threading.Tasks.ValueTask
            public Flush () : void
            public Seek ($offset: number, $origin: System.IO.SeekOrigin) : bigint
            public Write ($value: boolean) : void
            public Write ($value: number) : void
            public Write ($buffer: System.Array$1<number>) : void
            public Write ($buffer: System.Array$1<number>, $index: number, $count: number) : void
            public Write ($ch: number) : void
            public Write ($chars: System.Array$1<number>) : void
            public Write ($chars: System.Array$1<number>, $index: number, $count: number) : void
            public Write ($value: System.Decimal) : void
            public Write ($value: bigint) : void
            public Write ($value: System.Half) : void
            public Write ($value: string) : void
            public Write ($buffer: System.ReadOnlySpan$1<number>) : void
            public Write ($chars: System.ReadOnlySpan$1<number>) : void
            public Write7BitEncodedInt ($value: number) : void
            public Write7BitEncodedInt64 ($value: bigint) : void
            public constructor ($output: System.IO.Stream)
            public constructor ($output: System.IO.Stream, $encoding: System.Text.Encoding)
            public constructor ($output: System.IO.Stream, $encoding: System.Text.Encoding, $leaveOpen: boolean)
            public constructor ()
        }
        enum SeekOrigin
        { Begin = 0, Current = 1, End = 2 }
        class Directory extends System.Object
        {
            public static GetParent ($path: string) : System.IO.DirectoryInfo
            public static CreateDirectory ($path: string) : System.IO.DirectoryInfo
            public static Exists ($path: string) : boolean
            public static SetCreationTime ($path: string, $creationTime: Date) : void
            public static SetCreationTimeUtc ($path: string, $creationTimeUtc: Date) : void
            public static GetCreationTime ($path: string) : Date
            public static GetCreationTimeUtc ($path: string) : Date
            public static SetLastWriteTime ($path: string, $lastWriteTime: Date) : void
            public static SetLastWriteTimeUtc ($path: string, $lastWriteTimeUtc: Date) : void
            public static GetLastWriteTime ($path: string) : Date
            public static GetLastWriteTimeUtc ($path: string) : Date
            public static SetLastAccessTime ($path: string, $lastAccessTime: Date) : void
            public static SetLastAccessTimeUtc ($path: string, $lastAccessTimeUtc: Date) : void
            public static GetLastAccessTime ($path: string) : Date
            public static GetLastAccessTimeUtc ($path: string) : Date
            public static GetFiles ($path: string) : System.Array$1<string>
            public static GetFiles ($path: string, $searchPattern: string) : System.Array$1<string>
            public static GetFiles ($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption) : System.Array$1<string>
            public static GetFiles ($path: string, $searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Array$1<string>
            public static GetDirectories ($path: string) : System.Array$1<string>
            public static GetDirectories ($path: string, $searchPattern: string) : System.Array$1<string>
            public static GetDirectories ($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption) : System.Array$1<string>
            public static GetDirectories ($path: string, $searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Array$1<string>
            public static GetFileSystemEntries ($path: string) : System.Array$1<string>
            public static GetFileSystemEntries ($path: string, $searchPattern: string) : System.Array$1<string>
            public static GetFileSystemEntries ($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption) : System.Array$1<string>
            public static GetFileSystemEntries ($path: string, $searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Array$1<string>
            public static EnumerateDirectories ($path: string) : System.Collections.Generic.IEnumerable$1<string>
            public static EnumerateDirectories ($path: string, $searchPattern: string) : System.Collections.Generic.IEnumerable$1<string>
            public static EnumerateDirectories ($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption) : System.Collections.Generic.IEnumerable$1<string>
            public static EnumerateDirectories ($path: string, $searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Collections.Generic.IEnumerable$1<string>
            public static EnumerateFiles ($path: string) : System.Collections.Generic.IEnumerable$1<string>
            public static EnumerateFiles ($path: string, $searchPattern: string) : System.Collections.Generic.IEnumerable$1<string>
            public static EnumerateFiles ($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption) : System.Collections.Generic.IEnumerable$1<string>
            public static EnumerateFiles ($path: string, $searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Collections.Generic.IEnumerable$1<string>
            public static EnumerateFileSystemEntries ($path: string) : System.Collections.Generic.IEnumerable$1<string>
            public static EnumerateFileSystemEntries ($path: string, $searchPattern: string) : System.Collections.Generic.IEnumerable$1<string>
            public static EnumerateFileSystemEntries ($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption) : System.Collections.Generic.IEnumerable$1<string>
            public static EnumerateFileSystemEntries ($path: string, $searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Collections.Generic.IEnumerable$1<string>
            public static GetDirectoryRoot ($path: string) : string
            public static GetCurrentDirectory () : string
            public static SetCurrentDirectory ($path: string) : void
            public static Move ($sourceDirName: string, $destDirName: string) : void
            public static Delete ($path: string) : void
            public static Delete ($path: string, $recursive: boolean) : void
            public static GetLogicalDrives () : System.Array$1<string>
            public static CreateSymbolicLink ($path: string, $pathToTarget: string) : System.IO.FileSystemInfo
            public static ResolveLinkTarget ($linkPath: string, $returnFinalTarget: boolean) : System.IO.FileSystemInfo
        }
        class DirectoryInfo extends System.IO.FileSystemInfo implements System.Runtime.Serialization.ISerializable
        {
            public get Parent(): System.IO.DirectoryInfo;
            public get Root(): System.IO.DirectoryInfo;
            public CreateSubdirectory ($path: string) : System.IO.DirectoryInfo
            public Create () : void
            public GetFiles () : System.Array$1<System.IO.FileInfo>
            public GetFiles ($searchPattern: string) : System.Array$1<System.IO.FileInfo>
            public GetFiles ($searchPattern: string, $searchOption: System.IO.SearchOption) : System.Array$1<System.IO.FileInfo>
            public GetFiles ($searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Array$1<System.IO.FileInfo>
            public GetFileSystemInfos () : System.Array$1<System.IO.FileSystemInfo>
            public GetFileSystemInfos ($searchPattern: string) : System.Array$1<System.IO.FileSystemInfo>
            public GetFileSystemInfos ($searchPattern: string, $searchOption: System.IO.SearchOption) : System.Array$1<System.IO.FileSystemInfo>
            public GetFileSystemInfos ($searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Array$1<System.IO.FileSystemInfo>
            public GetDirectories () : System.Array$1<System.IO.DirectoryInfo>
            public GetDirectories ($searchPattern: string) : System.Array$1<System.IO.DirectoryInfo>
            public GetDirectories ($searchPattern: string, $searchOption: System.IO.SearchOption) : System.Array$1<System.IO.DirectoryInfo>
            public GetDirectories ($searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Array$1<System.IO.DirectoryInfo>
            public EnumerateDirectories () : System.Collections.Generic.IEnumerable$1<System.IO.DirectoryInfo>
            public EnumerateDirectories ($searchPattern: string) : System.Collections.Generic.IEnumerable$1<System.IO.DirectoryInfo>
            public EnumerateDirectories ($searchPattern: string, $searchOption: System.IO.SearchOption) : System.Collections.Generic.IEnumerable$1<System.IO.DirectoryInfo>
            public EnumerateDirectories ($searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Collections.Generic.IEnumerable$1<System.IO.DirectoryInfo>
            public EnumerateFiles () : System.Collections.Generic.IEnumerable$1<System.IO.FileInfo>
            public EnumerateFiles ($searchPattern: string) : System.Collections.Generic.IEnumerable$1<System.IO.FileInfo>
            public EnumerateFiles ($searchPattern: string, $searchOption: System.IO.SearchOption) : System.Collections.Generic.IEnumerable$1<System.IO.FileInfo>
            public EnumerateFiles ($searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Collections.Generic.IEnumerable$1<System.IO.FileInfo>
            public EnumerateFileSystemInfos () : System.Collections.Generic.IEnumerable$1<System.IO.FileSystemInfo>
            public EnumerateFileSystemInfos ($searchPattern: string) : System.Collections.Generic.IEnumerable$1<System.IO.FileSystemInfo>
            public EnumerateFileSystemInfos ($searchPattern: string, $searchOption: System.IO.SearchOption) : System.Collections.Generic.IEnumerable$1<System.IO.FileSystemInfo>
            public EnumerateFileSystemInfos ($searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Collections.Generic.IEnumerable$1<System.IO.FileSystemInfo>
            public MoveTo ($destDirName: string) : void
            public Delete () : void
            public Delete ($recursive: boolean) : void
            public constructor ($path: string)
            public constructor ()
        }
        class FileSystemInfo extends System.MarshalByRefObject implements System.Runtime.Serialization.ISerializable
        {
            public get FullName(): string;
            public get Extension(): string;
            public get Name(): string;
            public get Exists(): boolean;
            public get CreationTime(): Date;
            public set CreationTime(value: Date);
            public get CreationTimeUtc(): Date;
            public set CreationTimeUtc(value: Date);
            public get LastAccessTime(): Date;
            public set LastAccessTime(value: Date);
            public get LastAccessTimeUtc(): Date;
            public set LastAccessTimeUtc(value: Date);
            public get LastWriteTime(): Date;
            public set LastWriteTime(value: Date);
            public get LastWriteTimeUtc(): Date;
            public set LastWriteTimeUtc(value: Date);
            public get LinkTarget(): string;
            public get Attributes(): System.IO.FileAttributes;
            public set Attributes(value: System.IO.FileAttributes);
            public Delete () : void
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public CreateAsSymbolicLink ($pathToTarget: string) : void
            public ResolveLinkTarget ($returnFinalTarget: boolean) : System.IO.FileSystemInfo
            public Refresh () : void
        }
        enum SearchOption
        { TopDirectoryOnly = 0, AllDirectories = 1 }
        class EnumerationOptions extends System.Object
        {
            public get RecurseSubdirectories(): boolean;
            public set RecurseSubdirectories(value: boolean);
            public get IgnoreInaccessible(): boolean;
            public set IgnoreInaccessible(value: boolean);
            public get BufferSize(): number;
            public set BufferSize(value: number);
            public get AttributesToSkip(): System.IO.FileAttributes;
            public set AttributesToSkip(value: System.IO.FileAttributes);
            public get MatchType(): System.IO.MatchType;
            public set MatchType(value: System.IO.MatchType);
            public get MatchCasing(): System.IO.MatchCasing;
            public set MatchCasing(value: System.IO.MatchCasing);
            public get MaxRecursionDepth(): number;
            public set MaxRecursionDepth(value: number);
            public get ReturnSpecialDirectories(): boolean;
            public set ReturnSpecialDirectories(value: boolean);
            public constructor ()
        }
        class FileInfo extends System.IO.FileSystemInfo implements System.Runtime.Serialization.ISerializable
        {
            public get Length(): bigint;
            public get DirectoryName(): string;
            public get Directory(): System.IO.DirectoryInfo;
            public get IsReadOnly(): boolean;
            public set IsReadOnly(value: boolean);
            public OpenText () : System.IO.StreamReader
            public CreateText () : System.IO.StreamWriter
            public AppendText () : System.IO.StreamWriter
            public CopyTo ($destFileName: string) : System.IO.FileInfo
            public CopyTo ($destFileName: string, $overwrite: boolean) : System.IO.FileInfo
            public Create () : System.IO.FileStream
            public Open ($mode: System.IO.FileMode) : System.IO.FileStream
            public Open ($mode: System.IO.FileMode, $access: System.IO.FileAccess) : System.IO.FileStream
            public Open ($mode: System.IO.FileMode, $access: System.IO.FileAccess, $share: System.IO.FileShare) : System.IO.FileStream
            public OpenRead () : System.IO.FileStream
            public OpenWrite () : System.IO.FileStream
            public MoveTo ($destFileName: string) : void
            public MoveTo ($destFileName: string, $overwrite: boolean) : void
            public Replace ($destinationFileName: string, $destinationBackupFileName: string) : System.IO.FileInfo
            public Replace ($destinationFileName: string, $destinationBackupFileName: string, $ignoreMetadataErrors: boolean) : System.IO.FileInfo
            public Decrypt () : void
            public Encrypt () : void
            public Open ($options: System.IO.FileStreamOptions) : System.IO.FileStream
            public constructor ($fileName: string)
            public constructor ()
        }
        class DirectoryNotFoundException extends System.IO.IOException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        enum FileAttributes
        { ReadOnly = 1, Hidden = 2, System = 4, Directory = 16, Archive = 32, Device = 64, Normal = 128, Temporary = 256, SparseFile = 512, ReparsePoint = 1024, Compressed = 2048, Offline = 4096, NotContentIndexed = 8192, Encrypted = 16384, IntegrityStream = 32768, NoScrubData = 131072 }
        enum MatchType
        { Simple = 0, Win32 = 1 }
        enum MatchCasing
        { PlatformDefault = 0, CaseSensitive = 1, CaseInsensitive = 2 }
        class EndOfStreamException extends System.IO.IOException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class File extends System.Object
        {
            public static OpenText ($path: string) : System.IO.StreamReader
            public static CreateText ($path: string) : System.IO.StreamWriter
            public static AppendText ($path: string) : System.IO.StreamWriter
            public static Copy ($sourceFileName: string, $destFileName: string) : void
            public static Copy ($sourceFileName: string, $destFileName: string, $overwrite: boolean) : void
            public static Create ($path: string) : System.IO.FileStream
            public static Create ($path: string, $bufferSize: number) : System.IO.FileStream
            public static Create ($path: string, $bufferSize: number, $options: System.IO.FileOptions) : System.IO.FileStream
            public static Delete ($path: string) : void
            public static Exists ($path: string) : boolean
            public static Open ($path: string, $mode: System.IO.FileMode) : System.IO.FileStream
            public static Open ($path: string, $mode: System.IO.FileMode, $access: System.IO.FileAccess) : System.IO.FileStream
            public static Open ($path: string, $mode: System.IO.FileMode, $access: System.IO.FileAccess, $share: System.IO.FileShare) : System.IO.FileStream
            public static SetCreationTime ($path: string, $creationTime: Date) : void
            public static SetCreationTimeUtc ($path: string, $creationTimeUtc: Date) : void
            public static GetCreationTime ($path: string) : Date
            public static GetCreationTimeUtc ($path: string) : Date
            public static SetLastAccessTime ($path: string, $lastAccessTime: Date) : void
            public static SetLastAccessTimeUtc ($path: string, $lastAccessTimeUtc: Date) : void
            public static GetLastAccessTime ($path: string) : Date
            public static GetLastAccessTimeUtc ($path: string) : Date
            public static SetLastWriteTime ($path: string, $lastWriteTime: Date) : void
            public static SetLastWriteTimeUtc ($path: string, $lastWriteTimeUtc: Date) : void
            public static GetLastWriteTime ($path: string) : Date
            public static GetLastWriteTimeUtc ($path: string) : Date
            public static GetAttributes ($path: string) : System.IO.FileAttributes
            public static SetAttributes ($path: string, $fileAttributes: System.IO.FileAttributes) : void
            public static OpenRead ($path: string) : System.IO.FileStream
            public static OpenWrite ($path: string) : System.IO.FileStream
            public static ReadAllText ($path: string) : string
            public static ReadAllText ($path: string, $encoding: System.Text.Encoding) : string
            public static WriteAllText ($path: string, $contents: string) : void
            public static WriteAllText ($path: string, $contents: string, $encoding: System.Text.Encoding) : void
            public static ReadAllBytes ($path: string) : System.Array$1<number>
            public static WriteAllBytes ($path: string, $bytes: System.Array$1<number>) : void
            public static ReadAllLines ($path: string) : System.Array$1<string>
            public static ReadAllLines ($path: string, $encoding: System.Text.Encoding) : System.Array$1<string>
            public static ReadLines ($path: string) : System.Collections.Generic.IEnumerable$1<string>
            public static ReadLines ($path: string, $encoding: System.Text.Encoding) : System.Collections.Generic.IEnumerable$1<string>
            public static WriteAllLines ($path: string, $contents: System.Array$1<string>) : void
            public static WriteAllLines ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>) : void
            public static WriteAllLines ($path: string, $contents: System.Array$1<string>, $encoding: System.Text.Encoding) : void
            public static WriteAllLines ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding) : void
            public static AppendAllText ($path: string, $contents: string) : void
            public static AppendAllText ($path: string, $contents: string, $encoding: System.Text.Encoding) : void
            public static AppendAllLines ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>) : void
            public static AppendAllLines ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding) : void
            public static Replace ($sourceFileName: string, $destinationFileName: string, $destinationBackupFileName: string) : void
            public static Replace ($sourceFileName: string, $destinationFileName: string, $destinationBackupFileName: string, $ignoreMetadataErrors: boolean) : void
            public static Move ($sourceFileName: string, $destFileName: string) : void
            public static Move ($sourceFileName: string, $destFileName: string, $overwrite: boolean) : void
            public static Encrypt ($path: string) : void
            public static Decrypt ($path: string) : void
            public static ReadAllTextAsync ($path: string, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task$1<string>
            public static ReadAllTextAsync ($path: string, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task$1<string>
            public static WriteAllTextAsync ($path: string, $contents: string, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static WriteAllTextAsync ($path: string, $contents: string, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static ReadAllBytesAsync ($path: string, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task$1<System.Array$1<number>>
            public static WriteAllBytesAsync ($path: string, $bytes: System.Array$1<number>, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static ReadAllLinesAsync ($path: string, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task$1<System.Array$1<string>>
            public static ReadAllLinesAsync ($path: string, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task$1<System.Array$1<string>>
            public static WriteAllLinesAsync ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static WriteAllLinesAsync ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static AppendAllTextAsync ($path: string, $contents: string, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static AppendAllTextAsync ($path: string, $contents: string, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static AppendAllLinesAsync ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static AppendAllLinesAsync ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static CreateSymbolicLink ($path: string, $pathToTarget: string) : System.IO.FileSystemInfo
            public static ResolveLinkTarget ($linkPath: string, $returnFinalTarget: boolean) : System.IO.FileSystemInfo
            public static Open ($path: string, $options: System.IO.FileStreamOptions) : System.IO.FileStream
            public static OpenHandle ($path: string, $mode?: System.IO.FileMode, $access?: System.IO.FileAccess, $share?: System.IO.FileShare, $options?: System.IO.FileOptions, $preallocationSize?: bigint) : Microsoft.Win32.SafeHandles.SafeFileHandle
        }
        class StreamReader extends System.IO.TextReader implements System.IDisposable
        {
            public static Null : System.IO.StreamReader
            public get CurrentEncoding(): System.Text.Encoding;
            public get BaseStream(): System.IO.Stream;
            public get EndOfStream(): boolean;
            public DiscardBufferedData () : void
            public constructor ($stream: System.IO.Stream)
            public constructor ($stream: System.IO.Stream, $detectEncodingFromByteOrderMarks: boolean)
            public constructor ($stream: System.IO.Stream, $encoding: System.Text.Encoding)
            public constructor ($stream: System.IO.Stream, $encoding: System.Text.Encoding, $detectEncodingFromByteOrderMarks: boolean)
            public constructor ($stream: System.IO.Stream, $encoding: System.Text.Encoding, $detectEncodingFromByteOrderMarks: boolean, $bufferSize: number)
            public constructor ($stream: System.IO.Stream, $encoding?: System.Text.Encoding, $detectEncodingFromByteOrderMarks?: boolean, $bufferSize?: number, $leaveOpen?: boolean)
            public constructor ($path: string)
            public constructor ($path: string, $detectEncodingFromByteOrderMarks: boolean)
            public constructor ($path: string, $encoding: System.Text.Encoding)
            public constructor ($path: string, $encoding: System.Text.Encoding, $detectEncodingFromByteOrderMarks: boolean)
            public constructor ($path: string, $encoding: System.Text.Encoding, $detectEncodingFromByteOrderMarks: boolean, $bufferSize: number)
            public constructor ($path: string, $options: System.IO.FileStreamOptions)
            public constructor ($path: string, $encoding: System.Text.Encoding, $detectEncodingFromByteOrderMarks: boolean, $options: System.IO.FileStreamOptions)
            public constructor ()
        }
        class TextReader extends System.MarshalByRefObject implements System.IDisposable
        {
            public static Null : System.IO.TextReader
            public Close () : void
            public Peek () : number
            public Read () : number
            public Read ($buffer: System.Array$1<number>, $index: number, $count: number) : number
            public Read ($buffer: System.Span$1<number>) : number
            public ReadToEnd () : string
            public ReadBlock ($buffer: System.Array$1<number>, $index: number, $count: number) : number
            public ReadBlock ($buffer: System.Span$1<number>) : number
            public ReadLine () : string
            public ReadLineAsync () : System.Threading.Tasks.Task$1<string>
            public ReadToEndAsync () : System.Threading.Tasks.Task$1<string>
            public ReadAsync ($buffer: System.Array$1<number>, $index: number, $count: number) : System.Threading.Tasks.Task$1<number>
            public ReadAsync ($buffer: System.Memory$1<number>, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.ValueTask$1<number>
            public ReadBlockAsync ($buffer: System.Array$1<number>, $index: number, $count: number) : System.Threading.Tasks.Task$1<number>
            public ReadBlockAsync ($buffer: System.Memory$1<number>, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.ValueTask$1<number>
            public Dispose () : void
            public static Synchronized ($reader: System.IO.TextReader) : System.IO.TextReader
        }
        class StreamWriter extends System.IO.TextWriter implements System.IDisposable, System.IAsyncDisposable
        {
            public static Null : System.IO.StreamWriter
            public get AutoFlush(): boolean;
            public set AutoFlush(value: boolean);
            public get BaseStream(): System.IO.Stream;
            public get Encoding(): System.Text.Encoding;
            public constructor ($stream: System.IO.Stream)
            public constructor ($stream: System.IO.Stream, $encoding: System.Text.Encoding)
            public constructor ($stream: System.IO.Stream, $encoding: System.Text.Encoding, $bufferSize: number)
            public constructor ($stream: System.IO.Stream, $encoding?: System.Text.Encoding, $bufferSize?: number, $leaveOpen?: boolean)
            public constructor ($path: string)
            public constructor ($path: string, $append: boolean)
            public constructor ($path: string, $append: boolean, $encoding: System.Text.Encoding)
            public constructor ($path: string, $append: boolean, $encoding: System.Text.Encoding, $bufferSize: number)
            public constructor ($path: string, $options: System.IO.FileStreamOptions)
            public constructor ($path: string, $encoding: System.Text.Encoding, $options: System.IO.FileStreamOptions)
            public constructor ()
        }
        class TextWriter extends System.MarshalByRefObject implements System.IDisposable, System.IAsyncDisposable
        {
            public static Null : System.IO.TextWriter
            public get FormatProvider(): System.IFormatProvider;
            public get Encoding(): System.Text.Encoding;
            public get NewLine(): string;
            public set NewLine(value: string);
            public Close () : void
            public DisposeAsync () : System.Threading.Tasks.ValueTask
            public Flush () : void
            public Write ($value: number) : void
            public Write ($buffer: System.Array$1<number>) : void
            public Write ($buffer: System.Array$1<number>, $index: number, $count: number) : void
            public Write ($buffer: System.ReadOnlySpan$1<number>) : void
            public Write ($value: string) : void
            public WriteLine ($value: string) : void
            public WriteLine ($buffer: System.ReadOnlySpan$1<number>) : void
            public Write ($format: string, $arg0: any) : void
            public Write ($format: string, $arg0: any, $arg1: any) : void
            public Write ($format: string, $arg0: any, $arg1: any, $arg2: any) : void
            public Write ($format: string, ...arg: any[]) : void
            public WriteLine ($format: string, $arg0: any) : void
            public WriteLine ($format: string, $arg0: any, $arg1: any) : void
            public WriteLine ($format: string, $arg0: any, $arg1: any, $arg2: any) : void
            public WriteLine ($format: string, ...arg: any[]) : void
            public WriteAsync ($value: number) : System.Threading.Tasks.Task
            public WriteAsync ($value: string) : System.Threading.Tasks.Task
            public WriteAsync ($buffer: System.Array$1<number>, $index: number, $count: number) : System.Threading.Tasks.Task
            public WriteAsync ($buffer: System.ReadOnlyMemory$1<number>, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public WriteLineAsync () : System.Threading.Tasks.Task
            public WriteLineAsync ($value: number) : System.Threading.Tasks.Task
            public WriteLineAsync ($value: string) : System.Threading.Tasks.Task
            public WriteLineAsync ($buffer: System.Array$1<number>, $index: number, $count: number) : System.Threading.Tasks.Task
            public WriteLineAsync ($buffer: System.ReadOnlyMemory$1<number>, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public FlushAsync () : System.Threading.Tasks.Task
            public Dispose () : void
            public Write ($value: boolean) : void
            public Write ($value: bigint) : void
            public Write ($value: System.Decimal) : void
            public Write ($value: any) : void
            public Write ($value: System.Text.StringBuilder) : void
            public WriteLine () : void
            public WriteLine ($value: number) : void
            public WriteLine ($buffer: System.Array$1<number>) : void
            public WriteLine ($buffer: System.Array$1<number>, $index: number, $count: number) : void
            public WriteLine ($value: boolean) : void
            public WriteLine ($value: bigint) : void
            public WriteLine ($value: System.Decimal) : void
            public WriteLine ($value: System.Text.StringBuilder) : void
            public WriteLine ($value: any) : void
            public WriteAsync ($value: System.Text.StringBuilder, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public WriteAsync ($buffer: System.Array$1<number>) : System.Threading.Tasks.Task
            public WriteLineAsync ($value: System.Text.StringBuilder, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public WriteLineAsync ($buffer: System.Array$1<number>) : System.Threading.Tasks.Task
            public static Synchronized ($writer: System.IO.TextWriter) : System.IO.TextWriter
        }
        class FileStream extends System.IO.Stream implements System.IDisposable, System.IAsyncDisposable
        {
        }
        enum FileOptions
        { None = 0, WriteThrough = -2147483648, Asynchronous = 1073741824, RandomAccess = 268435456, DeleteOnClose = 67108864, SequentialScan = 134217728, Encrypted = 16384 }
        enum FileMode
        { CreateNew = 1, Create = 2, Open = 3, OpenOrCreate = 4, Truncate = 5, Append = 6 }
        enum FileAccess
        { Read = 1, Write = 2, ReadWrite = 3 }
        enum FileShare
        { None = 0, Read = 1, Write = 2, ReadWrite = 3, Delete = 4, Inheritable = 16 }
        class FileStreamOptions extends System.Object
        {
            public get Mode(): System.IO.FileMode;
            public set Mode(value: System.IO.FileMode);
            public get Access(): System.IO.FileAccess;
            public set Access(value: System.IO.FileAccess);
            public get Share(): System.IO.FileShare;
            public set Share(value: System.IO.FileShare);
            public get Options(): System.IO.FileOptions;
            public set Options(value: System.IO.FileOptions);
            public get PreallocationSize(): bigint;
            public set PreallocationSize(value: bigint);
            public get BufferSize(): number;
            public set BufferSize(value: number);
            public constructor ()
        }
        enum HandleInheritability
        { None = 0, Inheritable = 1 }
        class InvalidDataException extends System.SystemException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class Path extends System.Object
        {
            public static DirectorySeparatorChar : number
            public static AltDirectorySeparatorChar : number
            public static VolumeSeparatorChar : number
            public static PathSeparator : number
            public static ChangeExtension ($path: string, $extension: string) : string
            public static GetDirectoryName ($path: string) : string
            public static GetDirectoryName ($path: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static GetExtension ($path: string) : string
            public static GetExtension ($path: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static GetFileName ($path: string) : string
            public static GetFileName ($path: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static GetFileNameWithoutExtension ($path: string) : string
            public static GetFileNameWithoutExtension ($path: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static GetRandomFileName () : string
            public static IsPathFullyQualified ($path: string) : boolean
            public static IsPathFullyQualified ($path: System.ReadOnlySpan$1<number>) : boolean
            public static HasExtension ($path: string) : boolean
            public static HasExtension ($path: System.ReadOnlySpan$1<number>) : boolean
            public static Combine ($path1: string, $path2: string) : string
            public static Combine ($path1: string, $path2: string, $path3: string) : string
            public static Combine ($path1: string, $path2: string, $path3: string, $path4: string) : string
            public static Combine (...paths: string[]) : string
            public static Join ($path1: System.ReadOnlySpan$1<number>, $path2: System.ReadOnlySpan$1<number>) : string
            public static Join ($path1: System.ReadOnlySpan$1<number>, $path2: System.ReadOnlySpan$1<number>, $path3: System.ReadOnlySpan$1<number>) : string
            public static Join ($path1: System.ReadOnlySpan$1<number>, $path2: System.ReadOnlySpan$1<number>, $path3: System.ReadOnlySpan$1<number>, $path4: System.ReadOnlySpan$1<number>) : string
            public static Join ($path1: string, $path2: string) : string
            public static Join ($path1: string, $path2: string, $path3: string) : string
            public static Join ($path1: string, $path2: string, $path3: string, $path4: string) : string
            public static Join (...paths: string[]) : string
            public static TryJoin ($path1: System.ReadOnlySpan$1<number>, $path2: System.ReadOnlySpan$1<number>, $destination: System.Span$1<number>, $charsWritten: $Ref<number>) : boolean
            public static TryJoin ($path1: System.ReadOnlySpan$1<number>, $path2: System.ReadOnlySpan$1<number>, $path3: System.ReadOnlySpan$1<number>, $destination: System.Span$1<number>, $charsWritten: $Ref<number>) : boolean
            public static GetRelativePath ($relativeTo: string, $path: string) : string
            public static TrimEndingDirectorySeparator ($path: string) : string
            public static TrimEndingDirectorySeparator ($path: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
            public static EndsInDirectorySeparator ($path: System.ReadOnlySpan$1<number>) : boolean
            public static EndsInDirectorySeparator ($path: string) : boolean
            public static GetInvalidFileNameChars () : System.Array$1<number>
            public static GetInvalidPathChars () : System.Array$1<number>
            public static GetFullPath ($path: string) : string
            public static GetFullPath ($path: string, $basePath: string) : string
            public static GetTempPath () : string
            public static GetTempFileName () : string
            public static IsPathRooted ($path: string) : boolean
            public static IsPathRooted ($path: System.ReadOnlySpan$1<number>) : boolean
            public static GetPathRoot ($path: string) : string
            public static GetPathRoot ($path: System.ReadOnlySpan$1<number>) : System.ReadOnlySpan$1<number>
        }
        class PathTooLongException extends System.IO.IOException implements System.Runtime.Serialization.ISerializable
        {
            public constructor ()
            public constructor ($message: string)
            public constructor ($message: string, $innerException: System.Exception)
        }
        class RandomAccess extends System.Object
        {
            public static GetLength ($handle: Microsoft.Win32.SafeHandles.SafeFileHandle) : bigint
            public static Read ($handle: Microsoft.Win32.SafeHandles.SafeFileHandle, $buffer: System.Span$1<number>, $fileOffset: bigint) : number
            public static Read ($handle: Microsoft.Win32.SafeHandles.SafeFileHandle, $buffers: System.Collections.Generic.IReadOnlyList$1<System.Memory$1<number>>, $fileOffset: bigint) : bigint
            public static ReadAsync ($handle: Microsoft.Win32.SafeHandles.SafeFileHandle, $buffer: System.Memory$1<number>, $fileOffset: bigint, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.ValueTask$1<number>
            public static ReadAsync ($handle: Microsoft.Win32.SafeHandles.SafeFileHandle, $buffers: System.Collections.Generic.IReadOnlyList$1<System.Memory$1<number>>, $fileOffset: bigint, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.ValueTask$1<bigint>
            public static Write ($handle: Microsoft.Win32.SafeHandles.SafeFileHandle, $buffer: System.ReadOnlySpan$1<number>, $fileOffset: bigint) : void
            public static Write ($handle: Microsoft.Win32.SafeHandles.SafeFileHandle, $buffers: System.Collections.Generic.IReadOnlyList$1<System.ReadOnlyMemory$1<number>>, $fileOffset: bigint) : void
            public static WriteAsync ($handle: Microsoft.Win32.SafeHandles.SafeFileHandle, $buffer: System.ReadOnlyMemory$1<number>, $fileOffset: bigint, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.ValueTask
            public static WriteAsync ($handle: Microsoft.Win32.SafeHandles.SafeFileHandle, $buffers: System.Collections.Generic.IReadOnlyList$1<System.ReadOnlyMemory$1<number>>, $fileOffset: bigint, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.ValueTask
        }
        class StringReader extends System.IO.TextReader implements System.IDisposable
        {
            public constructor ($s: string)
            public constructor ()
        }
        class StringWriter extends System.IO.TextWriter implements System.IDisposable, System.IAsyncDisposable
        {
            public get Encoding(): System.Text.Encoding;
            public GetStringBuilder () : System.Text.StringBuilder
            public constructor ()
            public constructor ($formatProvider: System.IFormatProvider)
            public constructor ($sb: System.Text.StringBuilder)
            public constructor ($sb: System.Text.StringBuilder, $formatProvider: System.IFormatProvider)
        }
        class UnmanagedMemoryAccessor extends System.Object implements System.IDisposable
        {
            public get Capacity(): bigint;
            public get CanRead(): boolean;
            public get CanWrite(): boolean;
            public Dispose () : void
            public ReadBoolean ($position: bigint) : boolean
            public ReadByte ($position: bigint) : number
            public ReadChar ($position: bigint) : number
            public ReadInt16 ($position: bigint) : number
            public ReadInt32 ($position: bigint) : number
            public ReadInt64 ($position: bigint) : bigint
            public ReadDecimal ($position: bigint) : System.Decimal
            public ReadSingle ($position: bigint) : number
            public ReadDouble ($position: bigint) : number
            public ReadSByte ($position: bigint) : number
            public ReadUInt16 ($position: bigint) : number
            public ReadUInt32 ($position: bigint) : number
            public ReadUInt64 ($position: bigint) : bigint
            public Write ($position: bigint, $value: boolean) : void
            public Write ($position: bigint, $value: number) : void
            public Write ($position: bigint, $value: bigint) : void
            public Write ($position: bigint, $value: System.Decimal) : void
            public constructor ($buffer: System.Runtime.InteropServices.SafeBuffer, $offset: bigint, $capacity: bigint)
            public constructor ($buffer: System.Runtime.InteropServices.SafeBuffer, $offset: bigint, $capacity: bigint, $access: System.IO.FileAccess)
            public constructor ()
        }
    }
    namespace Microsoft.Win32.SafeHandles {
        class SafeFileHandle extends Microsoft.Win32.SafeHandles.SafeHandleZeroOrMinusOneIsInvalid implements System.IDisposable
        {
        }
        class SafeHandleZeroOrMinusOneIsInvalid extends System.Runtime.InteropServices.SafeHandle implements System.IDisposable
        {
        }
    }
    namespace System.Runtime.ConstrainedExecution {
        class CriticalFinalizerObject extends System.Object
        {
        }
    }
    namespace System.ComponentModel {
        class TypeConverter extends System.Object
        {
        }
        interface ITypeDescriptorContext extends System.IServiceProvider
        {
            GetService ($serviceType: System.Type) : any
        }
    }
    namespace Puerts {
        class JsEnv extends System.Object implements System.IDisposable
        {
            public static jsEnvs : System.Collections.Generic.List$1<Puerts.JsEnv>
            public get ArgumentsPusher(): Puerts.PushJSFunctionArgumentsCallback;
            public set ArgumentsPusher(value: Puerts.PushJSFunctionArgumentsCallback);
            public get Index(): number;
            public ExecuteModule ($filename: string) : void
            public Eval ($chunk: string, $chunkName?: string) : void
            public ClearModuleCache () : void
            public static ClearAllModuleCaches () : void
            public AddLazyStaticWrapLoader ($type: System.Type, $lazyStaticWrapLoader: System.Func$1<Puerts.TypeRegisterInfo>) : void
            public RegisterGeneralGetSet ($type: System.Type, $getter: Puerts.GeneralGetter, $setter: Puerts.GeneralSetter) : void
            public GetTypeId ($type: System.Type) : number
            public LowMemoryNotification () : void
            public Tick () : void
            public WaitDebugger () : void
            public Dispose () : void
            public constructor ()
            public constructor ($loader: Puerts.ILoader, $debugPort?: number)
            public constructor ($loader: Puerts.ILoader, $externalRuntime: System.IntPtr, $externalContext: System.IntPtr)
            public constructor ($loader: Puerts.ILoader, $debugPort: number, $externalRuntime: System.IntPtr, $externalContext: System.IntPtr)
        }
        interface PushJSFunctionArgumentsCallback
        { (isolate: System.IntPtr, jsEnvIdx: number, nativeJsFuncPtr: System.IntPtr) : void; }
        var PushJSFunctionArgumentsCallback: { new (func: (isolate: System.IntPtr, jsEnvIdx: number, nativeJsFuncPtr: System.IntPtr) => void): PushJSFunctionArgumentsCallback; }
        class TypeRegisterInfo extends System.Object
        {
        }
        interface GeneralGetter
        { (isolate: System.IntPtr, getValueApi: Puerts.IGetValueFromJs, value: System.IntPtr, isByRef: boolean) : any; }
        var GeneralGetter: { new (func: (isolate: System.IntPtr, getValueApi: Puerts.IGetValueFromJs, value: System.IntPtr, isByRef: boolean) => any): GeneralGetter; }
        interface IGetValueFromJs
        {
        }
        interface GeneralSetter
        { (isolate: System.IntPtr, setValueApi: Puerts.ISetValueToJs, holder: System.IntPtr, obj: any) : void; }
        var GeneralSetter: { new (func: (isolate: System.IntPtr, setValueApi: Puerts.ISetValueToJs, holder: System.IntPtr, obj: any) => void): GeneralSetter; }
        interface ISetValueToJs
        {
        }
        interface ILoader
        {
            FileExists ($filepath: string) : boolean
            ReadFile ($filepath: string, $debugpath: $Ref<string>) : string
        }
    }
        class GUITool extends System.Object
        {
            public static AlignTextToFramePadding () : void
            public static ArrowButton ($str_id: string, $dir: ImGuiNET.ImGuiDir) : boolean
            public static Begin ($name: string, $p_open: $Ref<boolean>, $flags: ImGuiNET.ImGuiWindowFlags) : boolean
            public static Begin ($name: string, $flags: ImGuiNET.ImGuiWindowFlags) : boolean
            public static Begin ($name: string) : boolean
            public static Begin ($name: string, $p_open: $Ref<boolean>) : boolean
            public static Button ($label: string, $size: System.Numerics.Vector2) : boolean
            public static Button ($label: string) : boolean
            public static End () : void
            public static Indent () : void
            public static Indent ($indent_w: number) : void
            public static InputText ($label: string, $buf: System.Array$1<number>, $buf_size: number) : boolean
            public static InputText ($label: string, $input: $Ref<string>, $maxLength: number, $flags: ImGuiNET.ImGuiInputTextFlags) : boolean
            public static InputText ($label: string, $input: $Ref<string>, $maxLength: number) : boolean
            public static InputText ($label: string, $buf: System.IntPtr, $buf_size: number, $flags: ImGuiNET.ImGuiInputTextFlags) : boolean
            public static InputText ($label: string, $buf: System.IntPtr, $buf_size: number) : boolean
            public static InputText ($label: string, $buf: System.Array$1<number>, $buf_size: number, $flags: ImGuiNET.ImGuiInputTextFlags) : boolean
            public static InputTextMultiline ($label: string, $input: $Ref<string>, $maxLength: number, $size: System.Numerics.Vector2, $flags: ImGuiNET.ImGuiInputTextFlags) : boolean
            public static InputTextMultiline ($label: string, $input: $Ref<string>, $maxLength: number, $size: System.Numerics.Vector2) : boolean
            public static MenuItem ($label: string, $enabled: boolean) : boolean
            public static MenuItem ($label: string, $shortcut: string, $selected: boolean) : boolean
            public static MenuItem ($label: string, $shortcut: string, $p_selected: $Ref<boolean>) : boolean
            public static MenuItem ($label: string, $shortcut: string, $p_selected: $Ref<boolean>, $enabled: boolean) : boolean
            public static MenuItem ($label: string) : boolean
            public static MenuItem ($label: string, $shortcut: string) : boolean
            public static MenuItem ($label: string, $shortcut: string, $selected: boolean, $enabled: boolean) : boolean
            public static SameLine ($offset_from_start_x: number, $spacing: number) : void
            public static SameLine ($offset_from_start_x: number) : void
            public static SameLine () : void
            public static Separator () : void
            public static ShowDemoWindow ($p_open: $Ref<boolean>) : void
            public static ShowDemoWindow () : void
            public static SliderFloat ($label: string, $v: $Ref<number>, $v_min: number, $v_max: number, $format: string, $flags: ImGuiNET.ImGuiSliderFlags) : boolean
            public static SliderFloat ($label: string, $v: $Ref<number>, $v_min: number, $v_max: number) : boolean
            public static SliderFloat ($label: string, $v: $Ref<number>, $v_min: number, $v_max: number, $format: string) : boolean
            public static SmallButton ($label: string) : boolean
            public static Spacing () : void
            public static StyleColorsClassic () : void
            public static StyleColorsDark () : void
            public static StyleColorsLight () : void
            public static Text ($fmt: string) : void
            public static TextColored ($col: System.Numerics.Vector4, $fmt: string) : void
        }
        namespace ImGuiNET {
        enum ImGuiDir
        { None = -1, Left = 0, Right = 1, Up = 2, Down = 3, COUNT = 4 }
        enum ImGuiWindowFlags
        { None = 0, NoTitleBar = 1, NoResize = 2, NoMove = 4, NoScrollbar = 8, NoScrollWithMouse = 16, NoCollapse = 32, AlwaysAutoResize = 64, NoBackground = 128, NoSavedSettings = 256, NoMouseInputs = 512, MenuBar = 1024, HorizontalScrollbar = 2048, NoFocusOnAppearing = 4096, NoBringToFrontOnFocus = 8192, AlwaysVerticalScrollbar = 16384, AlwaysHorizontalScrollbar = 32768, AlwaysUseWindowPadding = 65536, NoNavInputs = 262144, NoNavFocus = 524288, UnsavedDocument = 1048576, NoDocking = 2097152, NoNav = 786432, NoDecoration = 43, NoInputs = 786944, NavFlattened = 8388608, ChildWindow = 16777216, Tooltip = 33554432, Popup = 67108864, Modal = 134217728, ChildMenu = 268435456, DockNodeHost = 536870912 }
        enum ImGuiInputTextFlags
        { None = 0, CharsDecimal = 1, CharsHexadecimal = 2, CharsUppercase = 4, CharsNoBlank = 8, AutoSelectAll = 16, EnterReturnsTrue = 32, CallbackCompletion = 64, CallbackHistory = 128, CallbackAlways = 256, CallbackCharFilter = 512, AllowTabInput = 1024, CtrlEnterForNewLine = 2048, NoHorizontalScroll = 4096, AlwaysOverwrite = 8192, ReadOnly = 16384, Password = 32768, NoUndoRedo = 65536, CharsScientific = 131072, CallbackResize = 262144, CallbackEdit = 524288 }
        enum ImGuiSliderFlags
        { None = 0, AlwaysClamp = 16, Logarithmic = 32, NoRoundToFormat = 64, NoInput = 128, InvalidMask = 1879048207 }
    }
    namespace System.Numerics {
        class Vector2 extends System.ValueType implements System.IEquatable$1<System.Numerics.Vector2>, System.IFormattable
        {
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public ToString () : string
        }
        class Vector4 extends System.ValueType implements System.IEquatable$1<System.Numerics.Vector4>, System.IFormattable
        {
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public ToString () : string
        }
    }
}
